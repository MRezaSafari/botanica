export interface BlogsResponseModel {
  data: {
    blogs: {
      edges: [
        {
          node: {
            title: string;
            handle: string;
          };
        }
      ];
    };
  };
}

export interface BlogArticlesResponseModel {
  data: {
    blog: {
      articles: {
        edges: {
          node: {
            title: string;
            id: string;
            publishedAt: string;
            image: {
              url: string;
              width: number;
              height: number;
              altText: string;
            };
            authorV2: {
              name: string;
            };
          };
        }[];
      };
    };
  };
}
