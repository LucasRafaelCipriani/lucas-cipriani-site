import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-dark-blue">
      <small className="bg-gray-800 block text-center py-[10px]">
        &copy;{currentYear} Lucas Cipriani Portfolio
      </small>
    </footer>
  );
};

export default Footer;
