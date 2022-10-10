import React, { FC } from 'react';

const testimonials = [
  {
    id: 1,
    quote:
      'Super thick and non-irritating. Smells great and relieved my dry skin and eczema patches. Beyond impressed!',
    attribution: 'Stephanie Rosenwinkel',
    role: 'LavenderShea Hand & Body',
  },
  {
    id: 2,
    quote:
      'I have been using day creams for all my adult life and I can honestly say this is my favorite. It is light enough to wear all day without the cream feeling heavy or oily. It is very refreshing and a little goes a long way. ',
    attribution: 'Bardia Maghami',
    role: 'Daily Moisturizer',
  },
  {
    id: 3,
    quote:
      'I tried a sample of this amazing toner and ended up buying multiple bottles. As soon as I spray it, I can just feel my skin soaking it up - it feels so hydrating and refreshing. ',
    attribution: 'Jinny',
    role: 'Rosewater Facial Toner',
  },
  {
    id: 4,
    quote:
      'I love how this cleanser lathers and cleans without stripping my skin of all of its moisture. It makes it easy to clean off makeup and face products. My skin feels soft and clean every time!',
    attribution: 'Hannah',
    role: 'Wild Oats & Honey Facial',
  },
];

const Testimonials: FC = () => {
  return (
    <section
      aria-labelledby="testimonial-heading"
      className="relative py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:py-32 lg:px-8"
    >
      <div className="max-w-2xl mx-auto lg:max-w-none">
        <h2
          id="testimonial-heading"
          className="text-2xl font-extrabold tracking-tight text-gray-900"
        >
          What are people saying?
        </h2>

        <div className="mt-16 space-y-8 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-x-2">
          {testimonials.map((testimonial) => (
            <blockquote
              key={testimonial.id}
              className=" border-2 p-4 sm:flex flex justify-center items-center flex-col"
            >
              <svg
                width={24}
                height={18}
                viewBox="0 0 24 18"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="flex-shrink-0 text-gray-700 mb-8 margin-auto"
              >
                <path
                  d="M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z"
                  fill="currentColor"
                />
              </svg>
              <div className="sm:flex flex justify-between flex-col flex-1 text-center">
                <p className=" text-gray-600 font-light text-md">{testimonial.quote}</p>
                <div className="flex justify-between flex-col">
                  <cite className="mt-4 block font-light text-sm text-gray-900">
                    {testimonial.attribution}
                  </cite>
                  <cite className="block font-light text-sm text-gray-700">
                    {testimonial.role}
                  </cite>
                </div>
              </div>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
