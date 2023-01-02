import { FC } from 'react';

import { getArticleByHandleQuery } from '@shopify/graphql-queries';
import { storefront } from '@shopify/utilities';
import { ArticleResponseModel } from '@shopify/models';
import { GetServerSideProps } from 'next';

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

type Props = {
  article: ArticleType;
};

const Article: FC<Props> = ({ article }: Props) => {
  const date = new Date(article?.publishedAt);
  const generatedDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;

  return (
    <div className="relative py-16 bg-white overflow-hidden">
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
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const handle = context.query.handle as string;
  const slug = context.query.slug as string;

  const articleResponse = await storefront<ArticleResponseModel>(
    getArticleByHandleQuery(handle, slug)
  );
  const article = articleResponse.data.blog.articleByHandle;

  return {
    props: {
      article,
    },
  };
};

export default Article;
