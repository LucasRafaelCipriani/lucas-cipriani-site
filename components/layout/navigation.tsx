import Link from 'next/link';
import React from 'react';

const Navigation = () => {
  return (
    <nav className="hidden md:block">
      <ul className="hidden gap-x-[20px] text-[18px] md:flex">
        <li>
          <Link href="/about" className="hover:underline">
            About
          </Link>
        </li>
        <li>
          <Link href="/work" className="hover:underline">
            My Work
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
