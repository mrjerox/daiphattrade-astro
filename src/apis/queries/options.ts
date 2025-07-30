export const GET_GENERAL_OPTIONS_QUERY = `
query getGeneralOptionsQuery($language: LanguageCodeFilterEnum = EN) {
  themeDptGeneralSettings(language: $language) {
    themeGeneralSettings {
      formRegister {
        buttonLabel
        description
        title
        background {
          node {
            altText
            filePath
            uri
            title
            slug
          }
        }
      }
      general {
        facebook
        footerDescription
        instagram
        logo {
          node {
            altText
            filePath
            title
            uri
            slug
          }
        }
      }
    }
  }
}
`;

export const GET_HOME_OPTIONS_QUERY = `
query getHomeOptionsQuery($language: LanguageCodeFilterEnum = EN) {
  homeSettings(language: $language) {
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
