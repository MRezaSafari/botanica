import { FC } from 'react';
import {
  Container,
  Perks,
  ProductList,
  SelectedCategories,
  Testimonials,
} from '@shopify/components';
import { homeStructureQuery } from '@shopify/graphql-queries';
import { HomeBasicModel } from '@shopify/models';
import { storefront } from '@shopify/utilities';

const Index: FC<HomeBasicModel> = ({ data }) => {
  return (
    <>
      <Container paddingOnDesktop={true}>
        <h2 className="font-semibold	 -tracking-5 font-poppins text-center pr-[45px] pl-[45px] text-52 md:text-140 text-dark mt-20 mb-20">
          Enjoy the Science behind Nature
        </h2>
      </Container>

      <section className="pb-28">
        <Container paddingOnDesktop={false}>
          <ProductList
            title={data.trendingProducts.title}
            moreText="Shop the collection"
            moreUrl={`/collection/${data.trendingProducts.handle}`}
            products={data.trendingProducts.products}
            badge="TRENDING"
          />
        </Container>
      </section>

      <section className="bg-white pt-28 pb-20">
        <Perks />
      </section>

      <section className="py-28">
        <Container paddingOnDesktop={false}>
          <ProductList
            title={data.bestSellersProducts.title}
            moreText="Shop the collection"
            moreUrl={`/collection/${data.bestSellersProducts.handle}`}
            products={data.bestSellersProducts.products}
            badge="BEST SELLER"
          />
        </Container>
      </section>

      <section className="bg-white pt-5 pb-20">
        <Container paddingOnDesktop={false}>
          <SelectedCategories />
        </Container>
      </section>

      <Testimonials />
    </>
  );
};

export async function getStaticProps() {
  const { data } = await storefront<HomeBasicModel>(homeStructureQuery);

  return {
    props: {
      data,
    },
  };
}

export default Index;
