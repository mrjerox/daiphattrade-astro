export const GET_PAGES_QUERY = `
query NewQuery($where: RootQueryToPageConnectionWhereArgs = {}) {
  pages(where: $where) {
    nodes {
      authorId
      content
      featuredImageId
      pageId
      title
      uri
      slug
      date
      status
      template {
        templateName
      }
    }
  }
}
`;

export const GET_PAGE_QUERY = `
query getPageQuery($slug: ID!, $idType: PageIdType!) {
  page(id: $slug, idType: $idType) {
    id
    title
    content
    uri
    template {templateName}
  }
}
`;
