import Image from "next/image";
import Home1 from "/public/imgs/Home1.jpg";
import Home2 from "../public/imgs/Home2.jpg";
import Home3 from "../public/imgs/Home3.jpg";
import { Carousel } from "flowbite-react";
import Head from "next/head";

const Slider = () => {
  return (
    <div className='h-56 sm:h-[30rem] xl:h-[45rem] relative w-full flex justify-center'>
      <div className='absolute z-10 bg-black bg-opacity-60 inset-0 flex justify-center items-center'>
        <div className='text-center'>
          <h1 className='text-4xl font-bold tracking-tight text-white sm:text-6xl'>
            اختر اثاثك بعنايه
          </h1>
          <p className='mt-6 text-lg leading-8 text-gray-600'>
            . اجود انواع الأثاث صنعت بعنايه من اجود الأخشاب
          </p>
          <div className='mt-10 flex items-center justify-center gap-x-6'>
            <a
              href='#products'
              className='rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600'>
              ابدأ رحلتك معنا الأن
            </a>
          </div>
        </div>
      </div>

      <Carousel
        slideInterval={1000}
        indicators={false}
        rightControl=' '
        leftControl=' '>
        <Image width={0} height={0} sizes='100vw' src={Home3.src} alt='lol' />
        <Image width={0} height={0} sizes='100vw' src={Home2.src} alt='lol' />
        <Image width={0} height={0} sizes='100vw' src={Home1.src} alt='lol' />
      </Carousel>
    </div>
  );
};

export default Slider;
