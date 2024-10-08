'use client';

import React, { useRef } from 'react';

// Card Component
const ReviewCard: React.FC<{
  name: string;
  title: string;
  company: string;
  image: string;
  review: string;
}> = ({ name, title, company, image, review }) => {
  return (
    <div className='bg-white shadow-lg rounded-xl p-6 m-4 w-full sm:w-80 flex-shrink-0 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105'>
      <div className='flex items-center mb-4'>
        <div className='flex space-x-1 text-yellow-500'>
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <svg
                key={i}
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                viewBox='0 0 20 20'
                fill='currentColor'>
                <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.204 3.698a1 1 0 00.95.69h3.862c.969 0 1.371 1.24.588 1.81l-3.125 2.27a1 1 0 00-.364 1.118l1.204 3.698c.3.921-.755 1.688-1.54 1.118l-3.125-2.27a1 1 0 00-1.176 0l-3.125 2.27c-.784.57-1.838-.197-1.539-1.118l1.204-3.698a1 1 0 00-.364-1.118L2.646 9.125c-.784-.57-.38-1.81.588-1.81h3.862a1 1 0 00.95-.69l1.203-3.698z' />
              </svg>
            ))}
        </div>
      </div>
      <p className='text-gray-600 mb-6'>{review}</p>
      <div className='flex items-center'>
        <img
          src={image}
          alt={name}
          className='w-16 h-16 rounded-full mr-4 shadow-lg border-2 border-gray-300'
        />
        <div>
          <p className='text-gray-900 font-bold'>{name}</p>
          <p className='text-indigo-600'>
            {title} at {company}
          </p>
        </div>
      </div>
    </div>
  );
};

// Main Component
const ReviewsSlider: React.FC = () => {
  const reviews = [
    {
      name: 'Chealsea Morgan',
      title: 'CEO',
      company: 'Subway',
      image: '/chls.png',
      review:
        'Vestibulum eu quam nec neque pellentesque efficitur id eget nisl...',
    },
    {
      name: 'Nick Cave',
      title: 'CMO',
      company: 'Nokia',
      image: '/nick.png',
      review: 'In a laoreet purus. Integer turpis quam, laoreet id orci nec...',
    },
    {
      name: 'Lana Rosenfeld',
      title: 'Senior VP',
      company: 'Pinterest',
      image: '/nixkv.png',
      review: 'Aliquam pulvinar vestibulum blandit. Donec sed nisl libero...',
    },
    {
      name: 'Giorgio Moroder',
      title: 'CTO OF GLOVO',
      company: 'Tesla',
      image: '/ellipse3.png',
      review:
        'Mauris nec magna a diam vehicula tristique at non urna. Proin feugiat...',
    },
    {
      name: 'John Doe',
      title: 'CTO',
      company: 'Apple',
      image: '/ellipse4.png',
      review:
        'Proin sagittis, neque sit amet venenatis lacinia, quam dolor efficitur ipsum...',
    },
  ];

  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className='px-8 py-12 bg-gray-50 relative'>
      <h2 className='text-center text-3xl font-bold mb-8 text-gray-800'>
        Apa Kata Mereka Tentang Team
      </h2>
      <div className='relative'>
        <div
          className='flex overflow-x-auto space-x-6 p-4 scrollbar-custom'
          ref={sliderRef}>
          {reviews.map((review, index) => (
            <ReviewCard
              key={index}
              name={review.name}
              title={review.title}
              company={review.company}
              image={review.image}
              review={review.review}
            />
          ))}
        </div>

        {/* Tombol Navigasi */}
        <div className='absolute bottom-0 right-0 flex space-x-4 p-6'>
          <button
            onClick={scrollLeft}
            className='text-white p-4 bg-indigo-600 rounded-full shadow-lg focus:outline-none transition transform hover:scale-110 hover:bg-indigo-500'
            aria-label='Scroll ke kiri'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M15 19l-7-7 7-7'
              />
            </svg>
          </button>
          <button
            onClick={scrollRight}
            className='text-white p-4 bg-indigo-600 rounded-full shadow-lg focus:outline-none transition transform hover:scale-110 hover:bg-indigo-500'
            aria-label='Scroll ke kanan'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M9 5l7 7-7 7'
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewsSlider;
