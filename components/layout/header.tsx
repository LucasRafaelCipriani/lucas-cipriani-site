import Link from 'next/link';
import React from 'react';
import Navigation from './navigation';
import MobileNavigation from './mobile-navigation';

const Header = () => {
  return (
    <header className="bg-dark-blue h-[90px] px-[30px]">
      <div className="md:max-w-[1230px] md:m-auto flex items-center justify-between h-full">
        <Link href="/">
          <h2 className="text-[30px]">Portfolio</h2>
        </Link>
        <Navigation />
        <MobileNavigation />
      </div>
    </header>
  );
};

export default Header;
