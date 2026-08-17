'use client';

import React from 'react';
import Link from 'next/link';

const NotFoundSection = () => {
  return (
    <section
      id='not-found'
      className='min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-green-100 relative scroll-mt-[60px]'
    >
      <div className='container mx-auto px-6 text-center mt-[90px] pb-10 normal:mt-0 normal:pb-0'>
        <div className='max-w-5xl mx-auto'>
          <h1 className='text-4xl md:text-6xl font-bold text-gray-800 mb-[70px] animate-fade-in'>
            Page not Found
          </h1>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link
              href='/'
              className='px-8 py-3 bg-main text-white rounded-lg hover:bg-main-hover transition-colors duration-200 font-medium shadow-lg hover:shadow-xl'
            >
              Go back to Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFoundSection;
