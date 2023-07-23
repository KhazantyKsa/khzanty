import Image from "next/image";
import Link from "next/link";

// Images
import Home1 from "/public/imgs/slider/Home1.png";
import Home2 from "/public/imgs/slider/Home2.png";
import Home3 from "/public/imgs/slider/Home3.png";

// Slider
import { Carousel } from "flowbite-react";

const Images = [
  { imgSrc: Home1, id: 1 },
  { imgSrc: Home2, id: 2 },
  { imgSrc: Home3, id: 3 },
];

const Slider = () => {
  return (
    <div className='h-[17.75rem] sm:h-[30rem] xl:h-[50rem] relative w-full flex justify-center '>
      <div className='absolute z-10 inset-0 flex justify-center items-center bg-black bg-opacity-50'>
        <div className='text-right w-full mt-16 lg:mt-9 mr-5'>
          <h1 className='text-4xl text-white sm:text-6xl arabic-font mt-1'>
            مرحبًا بكم في خزاننتي
          </h1>
          <p className='lg:mt-6 text-sm lg:text-2xl leading-8 text-gray-200'>
            نقدم خدمات التصنيع والصيانة لجميع أنواع الأثاث الخشبي
          </p>
          <p className='lg:mt-6 text-sm lg:text-2xl leading-8 text-gray-200'>
            نحن نهتم بتوفير منتجات عالية الجوده وخدمات احترافيه لتلبية احتياجات
            عملائنا
          </p>
          <div className='mt-3 lg:mt-20 flex justify-end gap-x-6'>
            <Link
              href='#products'
              className='rounded-md bg-green-600 px-3.5 py-2.5 text-sm lg:text-lg font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600'>
              ابدأ رحلتك معنا الأن
            </Link>
          </div>
        </div>
      </div>

      <Carousel
        className='h-full'
        slideInterval={1000}
        indicators={false}
        rightControl=' '
        leftControl=' '>
        {Images.map((img) => (
          <Image
            key={img.id}
            width={0}
            height={0}
            sizes='100vw'
            src={img.imgSrc}
            alt='lol'
            className='h-full object-cover'
          />
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
