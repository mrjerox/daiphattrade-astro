import { API_HOST, API_ENDPOINT } from "../configs/api.conf";

// Type
interface gqlParams {
  query: string;
  variables?: {};
  token?: string;
}

// Default
export const wpQuery = async ({ query, variables = {}, token }: gqlParams) => {
  const GET_HOME_OPTIONS_QUERY = `
query getHomeOptionsQuery {
  homePageSettings {
    home {
      homeSs1 {
        description
        title
        url
        image {
          node {
            filePath
            slug
            title
            altText
            caption
          }
        }
      }
      homeSs2 {
        url
        title
        selectCategories {
          nodes {
            slug
            name
            uri
            ... on ProductCategory {
              image {
                filePath
                altText
                slug
                title
              }
            }
          }
        }
      }
      homeSs3 {
        description
        url
        title
        image {
          node {
            altText
            filePath
            title
            slug
          }
        }
      }
      homeSs4 {
        content
        description
        title
        gallery {
          nodes {
            altText
            filePath
            title
            slug
          }
        }
      }
    }
  }
}
`;
  const res = await fetch(API_HOST + API_ENDPOINT, {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: `Basic ${token}`,
    },
    method: "POST",
    body: JSON.stringify({
      GET_HOME_OPTIONS_QUERY,
    }),
  });
  if (!res.ok) {
    console.error(res);
    return {};
  }
  const { data } = await res.json();
  console.log("GraphQL Response:", data);
  return data;
};
