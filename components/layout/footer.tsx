import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-dark-blue text-white">
      <div className="px-[30px] pt-[20px] mb-[30px] space-y-[40px] md:space-y-0 md:justify-between md:max-w-[1230px] md:m-auto md:pt-[50px] md:mb-[50px] md:flex">
        <div>
          <h3 className="text-[20px]">Contact Information</h3>
          <ul className="mt-[10px] space-y-2">
            <li>
              Phone: <a href="tel:+55 (48) 99600-1678">+55 (48) 99600-1678</a>
            </li>
            <li>
              Email:{' '}
              <a href="mailto:lucas.ci25@hotmail.com">lucas.ci25@hotmail.com</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-[20px]">Social Medias</h3>
          <ul className="mt-[10px] space-y-2">
            <li>
              <a
                href="https://www.facebook.com/lucas.cipriani2/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/lucas-cipriani/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/lucascipri25/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <small className="bg-gray-500 block text-center py-[10px]">
        &copy;{currentYear} Lucas Cipriani Portfolio
      </small>
    </footer>
  );
};

export default Footer;
