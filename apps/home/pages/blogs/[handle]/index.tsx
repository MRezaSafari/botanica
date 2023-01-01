import { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { getBlogArticlesByHandleQuery } from '@shopify/graphql-queries';
import { storefront } from '@shopify/utilities';
import { BlogArticlesResponseModel } from '@shopify/models';

type ArticleType = {
  node: {
    handle: string;
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
};

const BlogArticles: FC = () => {
  const router = useRouter();
  const handle = router.query.handle as string;
  const [loading, setLoading] = useState<boolean>(false);
  const [articles, setArticles] = useState<ArticleType[]>(null);

  const getBlogArticles = async () => {
    setLoading(true);

    const blogArticlesResponse = await storefront<BlogArticlesResponseModel>(
      getBlogArticlesByHandleQuery(handle)
    );
    const blogArticles = blogArticlesResponse.data.blog.articles.edges;

    if (blogArticles) {
      setArticles(blogArticles);
    }

    setLoading(false);
  };

  useEffect(() => {
    getBlogArticles();
  }, []);

  return (
    <div className=" max-w-7xl mx-auto py-12">
      <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl text-center">
        Articles
      </h2>
      {loading ? (
        <div className="h-96">
          <div className="flex animate-pulse flex-row items-center h-full justify-center space-x-5">
            <div className="w-12 bg-gray-300 h-12 rounded-full "></div>
            <div className="w-12 bg-gray-300 h-12 rounded-full "></div>
            <div className="w-12 bg-gray-300 h-12 rounded-full "></div>
            <div className="w-12 bg-gray-300 h-12 rounded-full "></div>
          </div>
        </div>
      ) : (
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {articles?.map((item: ArticleType) => {
            const article = item.node;
            const date = new Date(article.publishedAt);
            const generatedDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
            return (
              <div
                onClick={() =>
                  router.push(`/blogs/${handle}/${article.handle}`)
                }
                key={article.id}
                className="flex flex-col rounded-lg shadow-lg overflow-hidden cursor-pointer"
              >
                <div className="flex-shrink-0">
                  <img
                    className="h-48 w-full object-cover"
                    src={article.image.url}
                    alt={article.image.altText}
                  />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <span className="text-xl font-semibold text-gray-900 mt-2">
                    {article.title}
                  </span>
                  <div className="mt-6">
                    <span className="text-sm font-medium text-gray-900">
                      {article.authorV2.name}
                    </span>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      {generatedDate}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default BlogArticles;
