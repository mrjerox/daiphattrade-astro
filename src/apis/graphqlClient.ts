import { API_HOST, API_ENDPOINT } from "../configs/api.conf";
import { API_SECRET_TOKEN } from "astro:env/server";

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
      // "Cache-Control": "public, max-age=1800",
      "Cache-Control": "no-cache, no-store, must-revalidate",
      Authorization: `Basic ${token || API_SECRET_TOKEN}`,
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
