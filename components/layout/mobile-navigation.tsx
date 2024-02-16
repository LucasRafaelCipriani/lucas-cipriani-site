'use client';

import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Link from 'next/link';

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative md:hidden">
      <button
        id="menu-btn"
        className="md:hidden text-xl relative top-[5px]"
        onClick={() => setIsOpen(true)}
      >
        <MenuIcon className="h-8 w-8" />
      </button>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
      <div
        id="menu"
        className={`fixed top-0 right-0 h-full z-40 bg-dark-blue text-white w-[90%] transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex items-center">
          <h2 className="text-[30px] p-4 pt-[10px]">Portfolio</h2>
          <button
            className="absolute top-0 right-0 p-4"
            onClick={() => setIsOpen(false)}
          >
            <XIcon className="h-8 w-8 text-white" />
          </button>
        </div>

        <ul className="pt-20 h-full flex flex-col items-center space-y-[10px]">
          <li>
            <Link href="/" className="hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:underline">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MobileNavigation;
