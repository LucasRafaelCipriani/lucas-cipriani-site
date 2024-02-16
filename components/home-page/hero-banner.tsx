import Image from 'next/legacy/image';
import React from 'react';

const HeroBanner = () => {
  return (
    <>
      <h1 className="text-center text-[30px] mb-[30px] font-semibold md:text-[50px]">
        Hello, I&apos;m Lucas
      </h1>
      <div className="w-[300px] h-[300px] m-auto overflow-hidden rounded-[50%]">
        <Image
          src="images/lucas.png"
          alt="An image showing Lucas"
          width={200}
          height={300}
          layout="responsive"
          className="object-contain object-top w-full h-full"
        />
      </div>
      <p className="text-center text-[20px] mt-[30px] md:max-w-[500px] m-auto">
        This is my portfolio - a place where I can talk about me, show my
        projects and give my contact information.
      </p>
    </>
  );
};

export default HeroBanner;
