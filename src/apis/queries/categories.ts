// Product categories
export const GET_PRODUCT_CATEGORIES_QUERY = `
  query GetProductCategories {
    nodes {
      id
      name
      slug
      productCategoryAcf {
        image {
          node {
            filePath
          }
        }
      }
    }
  }
`;
