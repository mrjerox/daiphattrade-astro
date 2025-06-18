export const GET_PAGES_QUERY = ``;
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
