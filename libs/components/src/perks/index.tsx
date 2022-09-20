import Container from '../container';

const perks = [
  {
    name: 'Free returns',
    imageUrl:
      'https://tailwindui.com/img/ecommerce/icons/icon-returns-light.svg',
    description:
      'Not what you expected? Place it back in the parcel and attach the pre-paid postage stamp.',
  },
  {
    name: 'Same day delivery',
    imageUrl:
      'https://tailwindui.com/img/ecommerce/icons/icon-calendar-light.svg',
    description:
      'We offer a delivery service that has never been done before. Checkout today and receive your products within hours.',
  },
  {
    name: 'All year discount',
    imageUrl:
      'https://tailwindui.com/img/ecommerce/icons/icon-gift-card-light.svg',
    description:
      'Looking for a deal? You can use the code "ALLYEAR" at checkout and get money off all year round.',
  },
  {
    name: 'For the planet',
    imageUrl:
      'https://tailwindui.com/img/ecommerce/icons/icon-planet-light.svg',
    description:
      'We’ve pledged 1% of sales to the preservation and restoration of the natural environment.',
  },
];

const Perks = () => {
  return (
    <section aria-labelledby="perks-heading">
      <Container>
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 text-center mb-10">
          Brand Values
        </h2>
      </Container>

      <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 sm:py-20 sm:pt-12 lg:px-8">
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-0">
          {perks.map((perk) => (
            <div
              key={perk.name}
              className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
            >
              <div className="md:flex-shrink-0">
                <div className="flow-root">
                  <img
                    className="-my-1 h-24 w-auto mx-auto"
                    src={perk.imageUrl}
                    alt=""
                  />
                </div>
              </div>
              <div className="mt-6 md:mt-0 md:ml-4 lg:mt-6 lg:ml-0">
                <h3 className="text-sm font-semibold tracking-wide uppercase text-gray-900">
                  {perk.name}
                </h3>
                <p className="mt-3 text-sm text-gray-500">{perk.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Perks;
