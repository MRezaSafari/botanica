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

const getBlogArticlesByHandleQuery = (handle: string) => {
  const getBlogArticleQuery = gql`
    {
      blog(handle: "${handle}") {
        title
        articles(first: 100) {
          edges {
            node {
              title
              id
              publishedAt
              image {
                url
                width
                height
                altText
              }
              authorV2 {
                name
              }
            }
          }
        }
      }
    }
  `;
  return getBlogArticleQuery;
};

export { blogsQuery, getBlogArticlesByHandleQuery };
