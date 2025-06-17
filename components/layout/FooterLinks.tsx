import { navLinks } from '@/constants/links';
import React from 'react';

const FooterLinks = ({
  onNavLinkClick,
}: {
  onNavLinkClick: (id: string) => void;
}) => {
  return (
    <div className="space-y-2">
      {navLinks.map((navLink) => (
        <button
          className="block text-gray-400 hover:text-white transition-colors duration-200"
          onClick={() => onNavLinkClick(navLink.id)}
          key={navLink.id}
        >
          {navLink.label}
        </button>
      ))}
    </div>
  );
};

export default FooterLinks;
