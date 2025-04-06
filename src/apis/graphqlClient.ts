import axios, { AxiosError } from 'axios';
import type { InternalAxiosRequestConfig, AxiosResponse } from 'axios';
import { API_URL, API_TOKEN } from '../configs/api.conf';

// GraphQL request interface
interface GraphQLRequest {
  query: string;
  variables?: Record<string, any>;
}

// GraphQL response interface
interface GraphQLResponse<T = any> {
  data?: T;
  errors?: Array<{
    message: string;
    locations?: Array<{ line: number; column: number }>;
    path?: string[];
  }>;
}

// Create axios instance for GraphQL
const graphqlClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
  timeout: 30000,
});

// Request interceptor
graphqlClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    if (API_TOKEN) {
      config.headers.Authorization = `Basic ${API_TOKEN}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

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