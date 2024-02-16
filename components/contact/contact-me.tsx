import React from 'react';

const ContactMe = () => {
  return (
    <>
      <h2 className="text-[30px] font-bold">Contact</h2>
      <p className="mt-[20px] text-[16px]">
        For further inquiries or to discuss potential projects, please feel free
        to reach out through any of the following contact methods. I am
        available for consultations, project discussions, and collaborations
        within the realm of front-end development and e-commerce solutions. Your
        satisfaction and project success are my top priorities.
      </p>
      <div className="mt-[40px]">
        <h3 className="text-[20px] font-bold mb-[15px]">Contact Information</h3>
        <ul className="space-y-[10px]">
          <li>Name: Lucas Rafael Cipriani</li>
          <li>Position: Senior Front-end Developer at McFadyen Digital</li>
          <li>
            Email:{' '}
            <a
              href="mailto:lucas.ci25@hotmail.com"
              className="hover:underline text-cian"
            >
              lucas.ci25@hotmail.com
            </a>
          </li>
          <li>
            LinkedIn:{' '}
            <a
              href="https://www.linkedin.com/in/lucas-cipriani/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-cian"
            >
              linkedin.com/in/lucas-cipriani
            </a>
          </li>
          <li>
            Phone:{' '}
            <a
              href="tel:+55 (48) 99600-1678"
              className="hover:underline text-cian"
            >
              +55 (48) 99600-1678
            </a>
          </li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <p className="mt-[20px] text-[16px]">
        Feel free to reach out during business hours (10:00 AM to 19:30 PM -
        BRT, Monday to Friday). I strive to respond to all inquiries within 24
        hours. I look forward to connecting with you and exploring how we can
        work together to achieve your business objectives and push the
        boundaries of what's possible in e-commerce and front-end development.
      </p>
    </>
  );
};

export default ContactMe;
