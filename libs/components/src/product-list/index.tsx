import { FC } from 'react';

import Link from 'next/link';

import { ProductsModel } from '@shopify/models';

import ProductCard from '../product-card';
import { IconChevronRight } from '@tabler/icons';

interface Props {
  title: string;
  moreText: string;
  moreUrl: string;
  products: ProductsModel;
  badge?: string;
}

const ProductList: FC<Props> = ({
  title,
  moreText,
  moreUrl,
  products,
  badge,
}) => {
  return (
    <>
      <div className="md:flex md:items-center md:justify-between md:flex-col">
        <h2 className="text-52 font-light text-center font-poppins -tracking-2 text-neutral">
          {title}
        </h2>
        <Link href={moreUrl}>
          <a className="hidden font-semibold font-poppins text-18 text-highlight hover:text-indigo-500 md:flex items-center gap-1">
            {moreText}
            <span aria-hidden="true">
              <IconChevronRight size={20} />
            </span>
          </a>
        </Link>
      </div>

      <div className="mt-12 grid grid-cols-1 xs:gap-y-1  md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
        {products.nodes.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="mt-8 text-sm md:hidden">
        <Link href={moreUrl}>
          <a className="font-medium text-indigo-600 hover:text-indigo-500">
            {moreText}
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </Link>
      </div>
    </>
  );
};

export default ProductList;
