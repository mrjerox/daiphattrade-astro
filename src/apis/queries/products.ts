// Categories
export const GET_PRODUCT_CATEGORIES_QUERY = `
query getProductCategoriesQuery($where: RootQueryToProductCategoryConnectionWhereArgs) {
  productCategories(where: $where) {
    nodes {
      id
      uri
      slug
      taxonomyName
      name
      description
      image {
        altText
        filePath
        title
        uri
      }
    }
  }
}
`;

export const GET_PRODUCT_CATEGORY_QUERY = `
query getProductCategoryQuery($id: ID!, $idType: ProductCategoryIdType) {
  productCategory(id: $id, idType: $idType) {
    slug
    uri
    name
    id
    description
  }
}
`;

// Brands
export const GET_PRODUCT_BRANDS_QUERY = `
query getProductBrandsQuery($where: RootQueryToProduct_brandsConnectionWhereArgs) {
  allProductBrands(where: $where) {
    nodes {
      id
      name
      slug
      uri
    }
  }
}
`;

// Origins
export const GET_PRODUCT_ORIGINS_QUERY = `
query getProductOriginsQuery($where: RootQueryToProduct_originsConnectionWhereArgs) {
  allProductOrigins(where: $where) {
    nodes {
      id
      name
      slug
      uri
    }
  }
}
`;

// Products
export const GET_ALL_PRODUCTS_QUERY = `
query GetAllProductsQuery($where: RootQueryToProductUnionConnectionWhereArgs = {}, $first: Int = 9999) {
  products(first: $first, where: $where) {
    nodes {
      uri
      title
      id
      slug
... on SimpleProduct {
      id
      name
      excerpt
      price(format: RAW)
      salePrice(format: RAW)
      sku
      slug
      status
      title
      image {
        filePath
        title
        uri
        slug
        altText
      }
      galleryImages {
        nodes {
          altText
          filePath
          title
          uri
          slug
        }
      }
      content
      related(first: 8) {
        nodes {
          ... on SimpleProduct {
            id
            name
            excerpt
            price(format: RAW)
            salePrice(format: RAW)
            sku
            slug
            title
            image {
              filePath
              title
              uri
              slug
              altText
            }
          }
        }
      }
    }
    productAcf {
      productHowtouse
      productOtherinfo
      productBenefits
    }
    }
  }
}
`;

export const GET_PRODUCTS_BY_CATEGORY_QUERY = `
query getProductsByCategoryQuery($category: String = "", $first: Int = 9, $field: ProductsOrderByEnum = DATE, $order: OrderEnum = ASC) {
  products(where: {category: $category, orderby: {field: $field, order: $order}}, first: $first) {
    nodes {
      ... on SimpleProduct {
        id
        name
        excerpt
        price(format: RAW)
        salePrice(format: RAW)
        sku
        slug
        status
        title
        image {
          filePath
          title
          uri
          slug
          altText
        }
      }
    }
  }
}
`;

export const GET_PRODUCT_QUERY = `
query getProductQuery($id: ID!, $idType: ProductIdTypeEnum, $relatedWhere: ProductToProductUnionConnectionWhereArgs, $relatedFirst: Int) {
  product(id: $id, idType: $idType) {
    ... on SimpleProduct {
      id
      name
      excerpt
      price(format: RAW)
      salePrice(format: RAW)
      sku
      slug
      status
      title
      image {
        filePath
        title
        uri
        slug
        altText
      }
      galleryImages {
        nodes {
          altText
          filePath
          title
          uri
          slug
        }
      }
      content
      related(where: $relatedWhere, first: $relatedFirst) {
        nodes {
          ... on SimpleProduct {
            id
            name
            excerpt
            price(format: RAW)
            salePrice(format: RAW)
            sku
            slug
            title
            image {
              filePath
              title
              uri
              slug
              altText
            }
          }
        }
      }
    }
    productAcf {
      productHowtouse
      productOtherinfo
      productBenefits
    }
  }
}
`;
