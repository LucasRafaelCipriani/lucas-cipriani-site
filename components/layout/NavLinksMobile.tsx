'use client';

import { navLinks } from '@/constants/constants';

const NavLinksMobile = ({
  onNavLinkClick,
}: {
  onNavLinkClick: (id: string) => void;
}) => {
  return (
    <div className="md:hidden mt-4 py-4 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg">
      {navLinks.map((navLink) => (
        <button
          className="block w-full text-left px-4 py-2 text-gray-600 hover:text-main hover:bg-gray-50 transition-colors duration-200"
          onClick={() => onNavLinkClick(navLink.id)}
          key={navLink.id}
        >
          {navLink.label}
        </button>
      ))}
    </div>
  );
};

export default NavLinksMobile;
