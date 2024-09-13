import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-cover bg-center bg-no-repeat bg-[url('/dhan.jpg')]">
      <div className='absolute inset-0 bg-black bg-opacity-60'></div>
      <div className='relative container mx-auto flex flex-col justify-center items-start h-screen text-left px-4'>
        <h1 className='text-white text-2xl md:text-5xl font-bold mb-4'>
          Instant collaboration for remote teams
        </h1>
        <p className='text-white text-lg md:text-xl mb-6'>
          All-in-one place for your remote team to chat, collaborate and track
          project progress.
        </p>

        <form className='flex flex-col md:flex-row gap-2 justify-start items-start'>
          <input
            type='email'
            placeholder='Email'
            className='px-4 py-2 w-full md:w-64 rounded-md text-black focus:outline-none'
          />
          <button className='bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition'>
            Get Early Access
          </button>
        </form>
      </div>
    </div>
  );
};

export default Hero;
