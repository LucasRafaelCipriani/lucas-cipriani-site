'use client';

import React, { useState } from 'react';
import Link from 'next/link';

import { MenuIcon, XIcon } from '@heroicons/react/outline';

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
        className={`fixed top-0 right-0 h-full z-40 bg-dark-blue w-[90%] transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex items-center border-b-white border-b-[1px]">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <h2 className="text-[30px] p-4 pt-[10px]">Portfolio</h2>
          </Link>

          <button
            className="absolute top-0 right-0 p-4"
            onClick={() => setIsOpen(false)}
          >
            <XIcon className="h-8 w-8" />
          </button>
        </div>

        <ul className="pt-[30px] h-full flex flex-col items-end pr-[30px] space-y-[20px]">
          <li>
            <Link
              href="/about"
              className="hover:underline"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/work"
              className="hover:underline"
              onClick={() => setIsOpen(false)}
            >
              My Work
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:underline"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MobileNavigation;
