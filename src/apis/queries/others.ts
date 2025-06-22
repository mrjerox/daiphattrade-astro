export const GET_MENU_QUERY = `
query GetMenuQuery($where: RootQueryToMenuItemConnectionWhereArgs = {}) {
  menuItems(where: $where) {
    nodes {
      url
      title
      uri
      label
      parentId
      key: id
      children: childItems {
        nodes {
          key: id
          url
          uri
          title
          label
          parentId
        }
      }
     
    }
  }
}
`;
