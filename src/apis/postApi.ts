import { executeGraphQL } from './graphqlClient';
import type { Post } from '../configs/graphql';
import { GET_POSTS_QUERY, GET_POST_BY_ID_QUERY } from './queries';

// API functions
export const postApi = {
  // Get all posts with pagination
  getAllPosts: async (first: number = 10, after?: string) => {
    return executeGraphQL<{
      posts: {
        nodes: Post[];
        pageInfo: {
          hasNextPage: boolean;
          endCursor: string;
        };
      };
    }>({
      query: GET_POSTS_QUERY,
      variables: { first, after },
    });
  },

  // Get post by ID
  getPostById: async (id: string) => {
    return executeGraphQL<{
      post: Post;
    }>({
      query: GET_POST_BY_ID_QUERY,
      variables: { id },
    });
  },
}; 