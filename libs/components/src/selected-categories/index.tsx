import { IconChevronRight } from '@tabler/icons';
import Image from 'next/future/image';
import Link from 'next/link';

const SelectedCategories = () => {
  return (
    <section aria-labelledby="category-heading">
      <div className="max-w-2xl mx-auto py-8 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8 my-16">
        <div className="md:flex md:items-center md:justify-between md:flex-col">
          <h2 className="text-52 font-light text-center font-poppins -tracking-2 text-neutral">
            Shop by Category
          </h2>
          <Link href="/collections">
            <a className="hidden font-semibold font-poppins text-18 text-highlight hover:text-indigo-500 md:flex items-center gap-1">
              Browse all categories
              <span aria-hidden="true">
                <IconChevronRight size={20} />
              </span>
            </a>
          </Link>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
          <div className="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2">
            <Image
              fill
              quality={100}
              src="/images/selected-categories/skin-care.jpg"
              alt="CBD Skincare"
              className="object-center object-cover group-hover:opacity-75"
            />
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-[#252358] opacity-50"
            />
            <div className="p-6 flex items-end">
              <div>
                <h3 className="font-semibold text-white font-poppins text-[32px]">
                  <Link href="/collection/cbd-face-body-care">
                    <a target="_blank">
                      <span className="absolute inset-0" />
                      CBD Skincare
                    </a>
                  </Link>
                </h3>
                <p
                  aria-hidden="true"
                  className="mt-1 text-base text-white font-poppins"
                >
                  Find out why topical, full-spectrum CBD Oil is a game changer
                  when it comes to healing and reviving your skin!
                </p>
              </div>
            </div>
          </div>
          <div className="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-full">
            <Image
              fill
              quality={100}
              src="/images/selected-categories/bath-and-body-care.jpg"
              alt="Bath & Body Care"
              className="object-center object-cover group-hover:opacity-75"
            />
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-[#252358] opacity-50 sm:absolute sm:inset-0"
            />
            <div className="p-6 flex items-end sm:absolute sm:inset-0">
              <div>
                <h3 className="font-semibold text-white font-poppins text-2xl">
                  <Link href="/collection/hand-body-self-care">
                    <a target="_blank">
                      <span className="absolute inset-0" />
                      Bath & Body Care
                    </a>
                  </Link>
                </h3>
                <p
                  aria-hidden="true"
                  className="mt-1 text-base text-white font-poppins"
                >
                  Keep your hands and your body clean, nourished, and feeling
                  exceptionally soft with our vegan and plant-based hand & body
                  products.
                </p>
              </div>
            </div>
          </div>
          <div className="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-full">
            <Image
              fill
              quality={100}
              src="/images/selected-categories/hair-care.jpg"
              alt="Hair Care"
              className="object-center object-cover group-hover:opacity-75"
            />
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-[#252358] opacity-50 sm:absolute sm:inset-0"
            />
            <div className="p-6 flex items-end sm:absolute sm:inset-0">
              <div>
                <h3 className="font-semibold text-white font-poppins text-2xl">
                  <Link href="/collection/hair-care">
                    <a target="_blank">
                      <span className="absolute inset-0" />
                      Hair Care
                    </a>
                  </Link>
                </h3>
                <p
                  aria-hidden="true"
                  className="mt-1 text-base text-white font-poppins"
                >
                  we’ve worked with haircare geniuses from the world’s leading
                  labs to bring you the best sulphate-free shampoos, nourishing
                  conditioners and the ultimate boosters and repair mask for
                  silky, shiny, bouncy hair.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 sm:hidden">
          <Link href="/collections">
            <a className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
              Browse all categories<span aria-hidden="true"> &rarr;</span>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SelectedCategories;
