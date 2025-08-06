export const GET_PAGES_QUERY = `
query GetPagesQuery($where: RootQueryToPageConnectionWhereArgs = {}) {
  pages(where: $where) {
    nodes {
      authorId
      content
      pageId
      title
      uri
      slug
      date
      status
      template {
        templateName
      }
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

export const GET_PAGE_ABOUT_QUERY = `
query NewQuery($id: ID = "about-us", $idType: PageIdType = URI) {
  page(id: $id, idType: $idType) {
    aboutUs {
      aboutSs1 {
        infomation {
          content
          fieldGroupName
          titlle
          image {
            node {
              altText
              filePath
              slug
              title
              uri
            }
          }
        }
      }
      aboutSs2f {
        title
        description
        list {
          title
          svg
          content
        }
      }
      aboutSs3 {
        title
        shortDescription
        reviews {
          star
          name
          date
          content
          avatar {
            node {
              altText
              filePath
              title
              slug
            }
          }
        }
      }
      aboutSs4 {
        description
        labelButton
        title
        url
        background {
          node {
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
