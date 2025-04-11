export const GET_GENERAL_OPTIONS_QUERY = `
  query GetGeneralOptions {
    themeGeneralSettingsPage {
      themesGeneralSettings {
        generalLogo {
          node {
            filePath
          }
        }
      }
    }
  }`;

export const GET_HOME_OPTIONS_QUERY = `
  query GetHomeOptions {
    themeGeneralSettingsPage {
      themesGeneralSettings {
        homeBanner {
          title
          description
          link
          image {
            node {
              filePath
            }
          }
        }
        homeCategory {
          bannerDescription
          bannerTitle
          link
          bannerImage {
            node {
              filePath
            }
          }
          categories {
            edges {
              node {
                id
                slug
                name
              }
            }
          }
        }
        homeFeatures {
          description
          title
          gallery {
            edges {
              node {
                filePath
              }
            }
          }
        }
        register {
          description
          title
          image {
            node {
              filePath
            }
          }
        }
      }
    }
  }
`;