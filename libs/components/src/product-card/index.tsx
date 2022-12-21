import { FC } from 'react';

import Image from 'next/future/image';
import Link from 'next/link';

import { ProductModel } from '@shopify/models';
import { useCartStore } from '@shopify/state';
import { truncateString } from '@shopify/utilities';
import { IconShoppingCartPlus } from '@tabler/icons';

interface Props {
  product: ProductModel;
  badge?: string;
}

const ProductCard: FC<Props> = ({ product, badge }) => {
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
    <div className="group relative block shadow-card hover:shadow-cardHover bg-[#ffffff] rounded-2xl transition-all duration-300 m-3 md:m-0">
      <Link href={`/product/${product.handle}`}>
        <a className="relative">
          <div className="w-full overflow-hidden relative lg:h-80 xl:h-80 ">
            <span className="absolute left-2 top-2 rounded-3xl pl-2 pr-2 font-semibold border border-dark text-xs">
              {badge}
            </span>
            <Image
              width={278}
              height={333}
              src={product.featuredImage.url}
              alt={
                product.featuredImage.altText
                  ? product.featuredImage.altText
                  : product.featuredImage.id
              }
              className="w-full h-full object-center object-cover rounded-2xl rounded-b-none"
            />
          </div>
          <div className="p-7 pt-0">
            <h3
              className="text-base text-[#111] font-poppins font-semibold my-6 text-center text-[20px]"
              style={{ minHeight: 48 }}
            >
              {truncateString(product.title, 55)}
            </h3>

            <p className="mt-5 mb-5 text-base font-semibold text-center text-[#111] text-[20px]">
              ${product.priceRange.minVariantPrice.amount}
            </p>

            <h4
              className=" text-[#666] font-poppins font-medium	 text-sm my-6 text-center"
              style={{ minHeight: 44 }}
            >
              {truncateString(product.description, 55)}
            </h4>
            <div className="flex justify-between mt-2 items-center">
              <button
                type="button"
                onClick={handleAddToCart}
                className=" focus:outline-none text-center rounded-3xl bg-highlight pt-3 pb-3 pr-4 pl-4 w-full text-white text-sm transition-all duration-300 hover:bg-midway"
              >
                <span>Add to Bag</span>
              </button>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default ProductCard;
