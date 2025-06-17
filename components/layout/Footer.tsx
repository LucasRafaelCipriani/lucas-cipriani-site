'use client';

import {
  LINKEDIN_URL,
  LOCATION,
  PERSONAL_EMAIL,
  PERSONAL_PHONE,
} from '@/constants/constants';
import { scrollToSectionHandler } from '@/utils/scroll-to-section';
import EmailIcon from '../icons/EmailIcon';
import LinkedinIcon from '../icons/LinkedinIcon';
import PhoneIcon from '../icons/PhoneIcon';
import FooterLinks from './FooterLinks';

const Footer = () => {
  return (
    <footer className="bg-green-950 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Lucas Cipriani</h3>
              <p className="text-gray-400 leading-relaxed">
                Frontend Developer. Over 8 years of experience in digital
                transformation and e-commerce development, collaborating with
                global teams.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <FooterLinks onNavLinkClick={scrollToSectionHandler} />
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect with Me</h4>
              <div className="flex space-x-4 mb-4">
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-green-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-main transition-all duration-200"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon />
                </a>
                <a
                  href={`mailto:${PERSONAL_EMAIL}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-green-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-main transition-all duration-200"
                  aria-label="Email"
                >
                  <EmailIcon />
                </a>
                <a
                  href={`tel:${PERSONAL_PHONE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-green-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-main transition-all duration-200"
                  aria-label="Phone/WhatsApp"
                >
                  <PhoneIcon />
                </a>
              </div>
              <p className="text-gray-400 text-sm">{LOCATION}</p>
              <p className="text-gray-400 text-sm mt-2">
                Always open to new opportunities and collaborations in frontend
                development and digital experience projects!
              </p>
            </div>
          </div>
          <div className="border-t border-green-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 flex items-center justify-center space-x-1">
              <span>
                © {new Date().getUTCFullYear()} Lucas Cipriani Portfolio
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
