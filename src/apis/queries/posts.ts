// GraphQL queries
export const GET_POSTS_QUERY = `
  query GetPosts($first: Int, $after: String) {
    posts(first: $first, after: $after) {
      nodes {
        id
        title
        content
        excerpt
        date
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;

export const GET_POST_BY_ID_QUERY = `
  query GetPostById($id: ID!) {
    post(id: $id) {
      id
      title
      content
      excerpt
      date
      featuredImage {
        node {
          sourceUrl
        }
      }
    }
  }
`;