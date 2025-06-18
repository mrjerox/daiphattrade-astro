import axios, { AxiosError } from 'axios';
import type { AxiosResponse } from 'axios';
import { API_HOST, API_ENDPOINT } from '../configs/api.conf';
import type { GraphQLRequest, GraphQLResponse } from '../configs/interface.conf';
import { API_SECRET_TOKEN } from 'astro:env/server';

// Type
interface gqlParams {
  query: string;
  variables?: {};
  token?: string;
}

// Create axios instance for GraphQL
const graphqlClient = axios.create({
  baseURL: API_HOST + API_ENDPOINT,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Authorization': `Basic ${API_SECRET_TOKEN}`
  },
  timeout: 30000,
});

// Response interceptor
graphqlClient.interceptors.response.use(
  (response: AxiosResponse) => {
    const graphqlResponse = response.data as GraphQLResponse;

    // Check for GraphQL errors
    if (graphqlResponse.errors && graphqlResponse.errors.length > 0) {
      const error = new AxiosError(
        graphqlResponse.errors[0].message,
        'GRAPHQL_ERROR',
        response.config,
        response.request,
        response
      );
      return Promise.reject(error);
    }

    return response;
  },
  (error: AxiosError) => {
    if (error.response) {
      const graphqlResponse = error.response.data as GraphQLResponse;
      if (graphqlResponse?.errors?.length && graphqlResponse.errors.length > 0) {
        error.message = graphqlResponse.errors[0].message;
      } else {
        error.message = (error.response.data as any)?.message || 'An error occurred';
      }
    } else if (error.request) {
      error.message = 'No response received from server';
    } else {
      error.message = 'Error setting up request';
    }
    return Promise.reject(error);
  }
);

// GraphQL client function
export const executeGraphQL = async <T = any>(
  request: GraphQLRequest
): Promise<T> => {
  try {
    const response = await graphqlClient.post<GraphQLResponse<T>>('', request);
    if (!response.data.data) {
      throw new Error('No data returned from GraphQL query');
    }
    return response.data.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error;
    }
    throw new Error('Unknown error occurred');
  }
};

// Default
export const wpQuery = async ({ query, variables = {}, token }: gqlParams) => {
  const res = await fetch(API_HOST + API_ENDPOINT, {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization': `Basic ${token || API_SECRET_TOKEN}`
    },
    method: 'POST',
    body: JSON.stringify({
      query,
      variables,
    }),
  });
  if (!res.ok) {
    console.error(res);
    return {};
  }
  const { data } = await res.json();
  return data;
}
