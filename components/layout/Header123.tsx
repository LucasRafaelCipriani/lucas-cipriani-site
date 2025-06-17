'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/utils/cn';
import { scrollToSectionHandler } from '@/utils/scroll-to-section';
import HambugerMenuIcon from '../icons/HambugerMenuIcon';
import NavLinks from './NavLinks';
import NavLinksMobile from './NavLinksMobile';
import CloseIcon from '../icons/CloseIcon';

const Header = () => {
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const scroll = () => {
      setIsScrolling(window.scrollY > 10);
    };

    window.addEventListener('scroll', scroll);

    return () => window.removeEventListener('scroll', scroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent',
        {
          'bg-white/95 backdrop-blur-sm shadow-lg': isScrolling,
        }
      )}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            className="text-2xl font-bold text-gray-800"
            onClick={() => scrollToSectionHandler('hero')}
          >
            Lucas Cipriani
          </button>
          <NavLinks onNavLinkClick={scrollToSectionHandler} />
          <button
            className="md:hidden text-gray-600"
            onClick={() => setMobileMenuOpened((prev) => !prev)}
          >
            {mobileMenuOpened ? <CloseIcon /> : <HambugerMenuIcon />}
          </button>
        </div>
        {mobileMenuOpened && (
          <NavLinksMobile onNavLinkClick={scrollToSectionHandler} />
        )}
      </nav>
    </header>
  );
};

export default Header;
