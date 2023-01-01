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
