import { executeGraphQL } from './graphqlClient';
import type { Post } from '../configs/graphql';
import { GET_GENERAL_OPTIONS_QUERY, GET_HOME_OPTIONS_QUERY } from './queries';

// API functions
export const optionsApi = {
  // Get all posts with pagination
  getGeneralOptions: async () => {
    return executeGraphQL<{
      themeGeneralSettingsPage: {
        themesGeneralSettings: any
      };
    }>({
      query: GET_GENERAL_OPTIONS_QUERY,
    });
  },

  // Get post by ID
  getHomeOptions: async () => {
    return executeGraphQL<{
      themeGeneralSettingsPage: {
        themesGeneralSettings: any
      };
    }>({
      query: GET_HOME_OPTIONS_QUERY,
    });
  },
}; 