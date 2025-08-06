export const GET_MENU_QUERY = `
query GetMenuQuery($where: RootQueryToMenuItemConnectionWhereArgs = {}, $first: Int = 99) {
  menuItems(where: $where, first: $first) {
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
