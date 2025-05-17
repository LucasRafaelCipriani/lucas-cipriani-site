import React from 'react';

const ContactMe = () => {
  return (
    <>
      <h2 className="text-[30px] font-bold">Contact</h2>
      <p className="mt-[20px] text-[16px]">
        If you have any questions, or would like to talk about any potentials
        projects, feel free to contact me any of the ways you have to the right.
        I do consultations, project discussions, and anything in between, in
        front-end development, and e-commerce. Your satisfaction, and your
        project's success, are my number one priority!
      </p>
      <div className="mt-[40px]">
        <h3 className="text-[20px] font-bold mb-[15px]">Contact Information</h3>
        <ul className="space-y-[10px]">
          <li>Name: Lucas Rafael Cipriani</li>
          <li>Position: Senior Front-end Developer</li>
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
          <li>
            Résumé:{' '}
            <a
              download="resume.pdf"
              href="documents/resume.pdf"
              className="hover:underline text-cian"
            >
              Download here
            </a>
          </li>
          <li></li>
        </ul>
      </div>
      <p className="mt-[20px] text-[16px]">
        Please don't hesitate to contact me during business hours (10:00 AM to
        19:30 PM - BRT Monday thru Friday) and I will try to respond to
        inquiries within 24 hours. I hope to speak with you soon to discuss the
        exciting opportunity to work together and achieve your business goals,
        and see how far we can push the boundaries of e-commerce and front-end
        development.
      </p>
    </>
  );
};

export default ContactMe;
