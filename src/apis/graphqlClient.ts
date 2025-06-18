import { API_HOST, API_ENDPOINT } from "../configs/api.conf";

// Type
interface gqlParams {
  query: string;
  variables?: {};
  token?: string;
}

// Default
export const wpQuery = async ({ query, variables = {}, token }: gqlParams) => {
  const res = await fetch(API_HOST + API_ENDPOINT, {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: `Basic ${token}`,
    },
    method: "POST",
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
};
