'use client';

import { useState } from 'react';
import HambugerMenuIcon from '../icons/HambugerMenuIcon';
import NavLinks from './NavLinks';
import NavLinksMobile from './NavLinksMobile';
import CloseIcon from '../icons/CloseIcon';

const Header = () => {
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);

  const scrollToSectionHandler = (id: string) => {
    console.log(id);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-800">Lucas Cipriani</div>
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
