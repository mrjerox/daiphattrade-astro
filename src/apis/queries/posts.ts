// Get posts
export const GET_POSTS_QUERY = `
query GetPostsQuery($categoryId: Int = 1, $language: LanguageCodeFilterEnum = EN) {
  posts(where: {categoryId: $categoryId, language: $language}) {
    nodes {
      uri
      title
      slug
      status
      date
      id
      featuredImage {
        node {
          altText
          filePath
          uri
          title
          slug
        }
      }
      excerpt
      content
    }
  }
}
`;

// Get related posts
export const GET_RELATED_POSTS_QUERY = `
query GetRelatedPostsQuery($first: Int = 6, $where: RootQueryToPostConnectionWhereArgs = {}) {
  posts(where: $where, first: $first) {
    nodes {
      uri
      title
      slug
      status
      postId
      content
      date
      excerpt
      featuredImage {
        node {
          altText
          filePath
          uri
          title
          slug
        }
      }
    }
  }
}
`;

// Get all posts
export const GET_ALL_POSTS_QUERY = `
query GetAllPostsQuery($language: LanguageCodeFilterEnum = EN) {
  posts(where: {language: $language}) {
    nodes {
      id
      date
      uri
      title
      postId
      slug
      status
      content
      excerpt
      featuredImage {
        node {
          altText
          filePath
          uri
          title
          slug
        }
      }
    }
  }
}
`;

// Get categories
export const GET_CATEGORIES_QUERY = `
query GetCategoriesQuery($language: LanguageCodeFilterEnum = EN) {
  categories(where: {language: $language}) {
    nodes {
      slug
      uri
      categoryId
      id
      name
      description
    }
  }
}
`;

// Get post
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
