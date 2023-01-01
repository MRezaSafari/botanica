import { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { getArticleByHandleQuery } from '@shopify/graphql-queries';
import { storefront } from '@shopify/utilities';
import { ArticleResponseModel } from '@shopify/models';

type ArticleType = {
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
  content: string;
};

const Article: FC = () => {
  const router = useRouter();
  const handle = router.query.handle as string;
  const slug = router.query.slug as string;
  const [loading, setLoading] = useState<boolean>(false);
  const [article, setArticle] = useState<ArticleType>(null);

  const date = new Date(article?.publishedAt);
  const generatedDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;

  const getArticle = async () => {
    setLoading(true);

    const articlesResponse = await storefront<ArticleResponseModel>(
      getArticleByHandleQuery(handle, slug)
    );
    const articleData = articlesResponse.data.blog.articleByHandle;
    if (articleData) {
      setArticle(articleData);
    }

    setLoading(false);
  };

  useEffect(() => {
    getArticle();
  }, []);

  console.log(article);
  return (
    <div className="relative py-16 bg-white overflow-hidden">
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
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto">
            <h1 className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {article?.title}
            </h1>
            <img
              className="rounded-lg w-full mt-5"
              src={article?.image.url}
              alt={article?.image.altText}
            />
          </div>

          <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
            <p>{article?.content}</p>
            <div className="mt-6">
              <span className="text-sm font-medium text-gray-900">
                {article?.authorV2.name}
              </span>
              <div className="flex space-x-1 text-sm text-gray-500">
                {generatedDate}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Article;
