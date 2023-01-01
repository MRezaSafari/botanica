import { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { blogsQuery } from '@shopify/graphql-queries';
import { BlogsResponseModel } from '@shopify/models';
import { storefront } from '@shopify/utilities';
import { Spinner } from '@shopify/components';

type BlogType = {
  node: {
    title: string;
    handle: string;
  };
};

const Blogs: FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [blogs, setBlogs] = useState<BlogType[]>();

  const getBlogs = async () => {
    setLoading(true);

    const blogsResponse = await storefront<BlogsResponseModel>(blogsQuery);
    const blogsData = blogsResponse.data.blogs.edges;

    if (blogsData) {
      setBlogs(blogsData);
    }

    setLoading(false);
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-12">
      <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl text-center">
        Blogs
      </h2>
      <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
        {loading ? (
          <Spinner />
        ) : (
          blogs?.map((item: BlogType) => {
            const blog = item.node;
            return (
              <div
                onClick={() => router.push(`/blogs/${blog.handle}`)}
                key={blog.title}
                className="rounded-lg shadow-lg overflow-hidden bg-white p-5 text-xl font-semibold text-gray-900 cursor-pointer"
              >
                <span>{blog.title}</span>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Blogs;
