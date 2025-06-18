import { executeGraphQL } from './graphqlClient';
import { GET_GENERAL_OPTIONS_QUERY, GET_HOME_OPTIONS_QUERY } from './queries';

// API functions
export const optionsApi = {
  getGeneralOptions: async () => {
    return executeGraphQL<{
      themeGeneralSettingsPage: {
        themesGeneralSettings: any
      };
    }>({
      query: GET_GENERAL_OPTIONS_QUERY,
    });
  },

  getHomeOptions: async () => {
    return executeGraphQL<{
      homePageSettings: {
        home?: any
      };
    }>({
      query: GET_HOME_OPTIONS_QUERY,
    });
  },
}; 
