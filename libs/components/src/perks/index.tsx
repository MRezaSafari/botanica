import {
  IconShieldChevron,
  IconShoppingCartPlus,
  IconTruckDelivery,
} from '@tabler/icons';

import Image from 'next/future/image';

import Container from '../container';

const perks = [
  {
    name: '30 day guarantee',
    Icon: (
      <Image
        width={80}
        height={80}
        src="/images/icons-gaurantee.svg"
        alt="30 Day Money Back Guarantee"
      />
    ),
    description:
      'The most effective treatment for all types of skin ailments or your money back.',
  },
  {
    name: 'free delivery',
    Icon: (
      <Image
        width={80}
        height={80}
        src="/images/icons-shipping.svg"
        alt="Free Delivery"
      />
    ),
    description:
      'All purchases over $50 will be shipped free to addesses within the United States.',
  },
  {
    name: 'all year discount',
    Icon: (
      <Image
        width={80}
        height={80}
        src="/images/icons-discount.svg"
        alt="All year discount"
      />
    ),
    description:
      'For amazing deals, use the code "ALLYEAR" at checkout year round.',
  },
  {
    name: 'for the planet',
    Icon: (
      <Image
        width={80}
        height={80}
        src="/images/icons-planet.svg"
        alt="For the planet"
      />
    ),
    description:
      'We pledged 1% of sales to preserve and restore natural environments.',
  },
];

const Perks = () => {
  return (
    <section aria-labelledby="perks-heading">
      <Container>
        <div className="md:flex md:items-center md:justify-between md:flex-col">
          <h2 className="text-52 font-light text-center font-poppins -tracking-2 text-neutral">
            Why Botanical Skin Science
          </h2>
        </div>
      </Container>

      <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 sm:py-20 sm:pt-12 lg:px-8">
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-0">
          {perks.map((perk) => {
            return (
              <div
                key={perk.name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
              >
                <div className="md:flex-shrink-0 flex justify-center h-[80px]">
                  <div className="flow-root">{perk.Icon}</div>
                </div>
                <div className="mt-6 md:mt-0 md:ml-4 lg:mt-6 lg:ml-0">
                  <h3 className="text-2xl font-poppins font-semibold tracking-wide uppercase text-dark">
                    {perk.name}
                  </h3>
                  <p className="text-base mt-3  text-[#666666] font-poppins">
                    {perk.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Perks;
