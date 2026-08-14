'use client';

import React from 'react';
import Image from 'next/image';
import {
  LINKEDIN_URL,
  PERSONAL_EMAIL,
  PERSONAL_PHONE,
} from '@/constants/constants';
import EmailIcon from '../icons/EmailIcon';
import LinkedinIcon from '../icons/LinkedinIcon';
import PhoneIcon from '../icons/PhoneIcon';
import DownArrowIcon from '../icons/DownArrowIcon';
import Icon from '../layout/Icon';
import { scrollToSectionHandler } from '@/utils/scroll-to-section';
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
      <button
        onClick={() => scrollToSectionHandler('about')}
        className='hidden normal:block absolute bottom-8 transform -translate-x-1/2 animate-bounce text-gray-600 hover:text-main transition-colors anim-duration-200'
      >
        <DownArrowIcon />
      </button>
    </section>
  );
};

export default NotFoundSection;
