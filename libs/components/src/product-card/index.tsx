import { FC } from 'react';

import Image from 'next/future/image';
import Link from 'next/link';

import { ProductModel } from '@shopify/models';
import { useCartStore } from '@shopify/state';
import { truncateString } from '@shopify/utilities';
import { IconShoppingCartPlus } from '@tabler/icons';

interface Props {
  product: ProductModel;
}

const ProductCard: FC<Props> = ({ product }) => {
  const useCart = useCartStore();

  const handleAddToCart = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    useCart.addItem({
      id: product.id,
      handle: product.handle,
      image: product.featuredImage.url,
      price: product.priceRange.maxVariantPrice.amount,
      qty: 1,
      title: product.title,
      variantId: product.variants.nodes[0].id,
    });
  };

  return (
    <div className="group relative rounded-md block">
      <Link href={`/product/${product.handle}`}>
        <a className="relative rounded-md block border border-transparent p-1 lg:group-hover:-translate-y-2 md:group-hover:-translate-y-2 lg:group-hover:border-indigo-200 md:group-hover:border-indigo-200 transition-all duration-300">
          <div className="w-full overflow-hidden relative lg:h-72 xl:h-80 ">
            <Image
              width={278}
              height={320}
              src={product.featuredImage.url}
              alt={product.featuredImage.altText}
              className="w-full h-full object-center object-cover rounded-md rounded-b-none"
            />
          </div>
          <div className="pt-1">
            <h3 className="text-sm text-gray-700" style={{ minHeight: 45 }}>
              {truncateString(product.title, 55)}
            </h3>
            <div className="flex justify-between mt-2 items-center">
              <p className="mt-1 text-md font-medium text-gray-900">
                ${product.priceRange.minVariantPrice.amount}
              </p>
              <button
                type="button"
                onClick={handleAddToCart}
                className="px-2 py-2 flex gap-2 items-center font-light text-xs border border-transparent rounded-md shadow-sm text-white bg-botanical hover:bg-indigo-700 focus:outline-none"
              >
                <IconShoppingCartPlus size={16} />
                <span className="hidden md:block lg:block">Add to cart</span>
              </button>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default ProductCard;
