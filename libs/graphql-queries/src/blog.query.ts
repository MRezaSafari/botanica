const gql = String.raw;

const blogsQuery = gql`
  {
    blogs(first: 100) {
      edges {
        node {
          title
          handle
        }
      }
    }
  }
`;

export { blogsQuery };
