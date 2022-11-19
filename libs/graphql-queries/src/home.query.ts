const gql = String.raw;

const menuQuery = gql`
  {
    menu(handle: "new-main-menu") {
      items {
        title
        type
        resourceId
        items {
          title
          type
          resourceId
        }
      }
    }
  }
`;

const homeStructureQuery = gql`
  {
    trendingProducts: collection(handle: "trending") {
      title
      handle
      products(first: 4) {
        nodes {
          handle
          id
          title
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
            maxVariantPrice {
              amount
              currencyCode
            }
          }
          availableForSale
          featuredImage {
            altText
            height
            width
            url
            id
          }
        }
      }
    }
    bestSellersProducts: collection(handle: "best-sellers") {
      title
      handle
      products(first: 4) {
        nodes {
          handle
          id
          title
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
            maxVariantPrice {
              amount
              currencyCode
            }
          }
          availableForSale
          featuredImage {
            altText
            height
            width
            url
            id
          }
        }
      }
    }
  }
`;

export { homeStructureQuery, menuQuery };
