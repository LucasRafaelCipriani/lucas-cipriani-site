'use client';

import { navLinks } from '@/constants/constants';

const NavLinks = ({
  onNavLinkClick,
}: {
  onNavLinkClick: (id: string) => void;
}) => {
  return (
    <div className="hidden md:flex items-center space-x-8">
      {navLinks.map((navLink) => (
        <button
          className="text-gray-600 hover:text-main transition-colors duration-200 font-medium"
          onClick={() => onNavLinkClick(navLink.id)}
          key={navLink.id}
        >
          {navLink.label}
        </button>
      ))}
    </div>
  );
};

export default NavLinks;
