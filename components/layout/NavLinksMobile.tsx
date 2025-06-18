'use client';

import { navLinks } from '@/constants/constants';
import { cn } from '@/utils/cn';

const NavLinksMobile = ({
  onNavLinkClick,
  isScrolling,
}: {
  onNavLinkClick: (id: string) => void;
  isScrolling: boolean;
}) => {
  return (
    <div
      className={cn(
        'md:hidden mt-4 py-4 bg-white backdrop-blur-sm rounded-lg',
        {
          'shadow-lg': !isScrolling,
        }
      )}
    >
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
