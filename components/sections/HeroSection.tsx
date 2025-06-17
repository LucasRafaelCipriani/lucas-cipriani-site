import React from 'react';
import Image from 'next/image';
import {
  LINKEDIN_URL,
  PERSONAL_EMAIL,
  PERSONAL_PHONE,
} from '@/constants/links';
import EmailIcon from '../icons/EmailIcon';
import LinkedinIcon from '../icons/LinkedinIcon';
import PhoneIcon from '../icons/PhoneIcon';
import DownArrowIcon from '../icons/DownArrowIcon';
import Icon from '../layout/Icon';

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-green-100 relative"
    >
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <Image
            className="w-48 h-48 mx-auto mb-8 rounded-full flex items-center justify-center shadow-lg"
            src="/images/lucas.png"
            width={48}
            height={48}
            alt="Lucas Cipriani Profile"
          />
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 animate-fade-in">
            Hello, I am <span className="text-main">Lucas Cipriani</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-3xl mx-auto">
            Frontend Developer
          </p>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Translating ideas into intuitive interfaces that drive results —
            building digital experiences for over 8 years.
          </p>
          <div className="flex justify-center space-x-6 mb-12">
            <Icon
              IconComponent={LinkedinIcon}
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
            />
            <Icon href={`mailto:${PERSONAL_EMAIL}`} IconComponent={EmailIcon} />
            <Icon href={`tel:${PERSONAL_PHONE}`} IconComponent={PhoneIcon} />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-main text-white rounded-lg hover:bg-main-hover transition-colors duration-200 font-medium shadow-lg hover:shadow-xl">
              Learn more about me
            </button>
            <a
              href="/documents/Lucas Ciprani - Curriculum.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-main text-main rounded-lg hover:bg-main hover:text-white transition-colors duration-200 font-medium"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
      <button className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-600 hover:text-main transition-colors anim-duration-200">
        <DownArrowIcon />
      </button>
    </section>
  );
};

export default HeroSection;
