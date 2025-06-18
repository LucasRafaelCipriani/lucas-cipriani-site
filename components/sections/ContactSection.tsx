import React from 'react';
import EmailIcon from '../icons/EmailIcon';
import {
  LINKEDIN_URL,
  LOCATION,
  PERSONAL_EMAIL,
  PERSONAL_PHONE,
} from '@/constants/constants';
import PhoneIcon from '../icons/PhoneIcon';
import LocationIcon from '../icons/LocationIcon';
import LinkedinIcon from '../icons/LinkedinIcon';

const ContactSection = () => {
  return (
    <section id="contact" className="py-10 md:py-20 bg-white scroll-mt-[60px]">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">
            Get in Touch
          </h2>
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Let's Talk!
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
              I'm always open to discussing frontend development opportunities,
              e-commerce and digital experience projects, or simply exchanging
              ideas about innovation and web technologies. Feel free to reach
              out!
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center text-main mb-4">
                <EmailIcon width="28" height="28" />
              </div>
              <h4 className="font-medium text-gray-800 mb-2">Email</h4>
              <a
                href={`mailto:${PERSONAL_EMAIL}`}
                className="text-gray-600 hover:text-main transition-colors duration-200 text-sm"
              >
                {PERSONAL_EMAIL}
              </a>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center text-main mb-4">
                <PhoneIcon width="28" height="28" />
              </div>
              <h4 className="font-medium text-gray-800 mb-2">Phone/WhatsApp</h4>
              <a
                href={`tel:${PERSONAL_PHONE}`}
                className="text-gray-600 hover:text-main transition-colors duration-200 text-sm"
              >
                {PERSONAL_PHONE}
              </a>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center text-main mb-4">
                <LocationIcon width="28" height="28" />
              </div>
              <h4 className="font-medium text-gray-800 mb-2">Location</h4>
              <a
                href="https://maps.app.goo.gl/JwEWSVk3vuaAXQCy5"
                target="_blank"
                className="text-gray-600 hover:text-main transition-colors duration-200 text-sm"
              >
                {LOCATION}
              </a>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center text-main mb-4">
                <LinkedinIcon width="28" height="28" />
              </div>
              <h4 className="font-medium text-gray-800 mb-2">LinkedIn</h4>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-main transition-colors duration-200 text-sm"
              >
                {LINKEDIN_URL.replace('https://www.', '')}
              </a>
            </div>
          </div>
          <div className="max-w-md mx-auto p-6 bg-gradient-to-r from-green-50 to-indigo-50 rounded-lg">
            <h4 className="font-semibold text-gray-800 mb-2">Quick Response</h4>
            <p className="text-gray-600 text-sm">
              I usually respond to emails and messages within 24 hours. For
              urgent matters, prefer WhatsApp or LinkedIn!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
