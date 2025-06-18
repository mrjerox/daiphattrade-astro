export const GET_GENERAL_OPTIONS_QUERY = `
  query getGeneralOptionsQuery {
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
