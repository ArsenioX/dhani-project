import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className='bg-[#151a33] text-gray-400 py-12'>
      <div className='container mx-auto px-4 flex justify-between'>
        <div className='flex-1'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left'>
            {/* Company Info */}
            <div>
              <h2 className='text-3xl font-bold text-white'>team.</h2>
              <p className='mt-4'>Collaboration platform for modern teams.</p>
              <p className='text-sm mt-4'>
                &copy; {new Date().getFullYear()} Team Inc. All rights reserved.
              </p>
            </div>

            {/* Company Links */}
            <div>
              <h3 className='text-lg font-semibold text-white mb-4'>Company</h3>
              <ul className='space-y-2'>
                <li>
                  <a className='hover:text-white' href='#'>
                    Product
                  </a>
                </li>
                <li>
                  <a className='hover:text-white' href='#'>
                    Blog
                  </a>
                </li>
                <li>
                  <a className='hover:text-white' href='#'>
                    Support
                  </a>
                </li>
              </ul>
            </div>

            {/* Features */}
            <div>
              <h3 className='text-lg font-semibold text-white mb-4'>
                Features
              </h3>
              <ul className='space-y-2'>
                <li>
                  <a className='hover:text-white' href='#'>
                    Screen Sharing
                  </a>
                </li>
                <li>
                  <a className='hover:text-white' href='#'>
                    iOS & Android Apps
                  </a>
                </li>
                <li>
                  <a className='hover:text-white' href='#'>
                    File Sharing
                  </a>
                </li>
                <li>
                  <a className='hover:text-white' href='#'>
                    User Management
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Subscription Form */}
        <div className='flex-1 max-w-xs'>
          <h3 className='text-center text-xl font-semibold text-white mb-6'>
            Stay up to date
          </h3>
          <div className='flex justify-center'>
            <form className='relative flex'>
              <input
                className='w-full rounded-full border-none bg-gray-700 p-4 pr-20 text-sm text-gray-400 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500'
                id='email'
                type='email'
                placeholder='Enter your email'
              />
              <button
                className='absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700'
                type='submit'>
                →
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
