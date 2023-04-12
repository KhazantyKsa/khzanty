import { useState, useEffect } from "react";
import Image from "next/image";
import PopUp from "./PopUp";
// Products
import { AllProducts } from "../data/AllProducts";
import { Beds } from "../data/Beds";
import { Seats } from "../data/Seats";
import { Tables } from "../data/Tables";
import { Wardrobes } from "../data/Wardrobes";

// icons
import { GiArabicDoor } from "react-icons/gi";
import { FaCouch } from "react-icons/fa";
import { MdOutlineTableBar } from "react-icons/md";
import { BiBed, BiDetail } from "react-icons/bi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { ImZoomIn } from "react-icons/im";
// Arrays

const categories = [
  { id: 1, name: "طاولات", icon: <MdOutlineTableBar />, data: Tables },
  { id: 2, name: "مقاعد", icon: <FaCouch />, data: Seats },
  { id: 3, name: "خزانات", icon: <GiArabicDoor />, data: Wardrobes },
  { id: 4, name: "سراير", icon: <BiBed />, data: Beds },
];

const Products = () => {
  const [products, setProducts] = useState(AllProducts);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  console.log({ isPopupOpen });

  const togglePopup = (image) => {
    setIsPopupOpen(!isPopupOpen);
    setSelectedImage(image);
  };
  const closePopUp = () => {
    setIsPopupOpen(false);
  };
  return (
    <section className='bg-white' id='products'>
      <h1 className='text-green-500 border-b-green-500 rounded-bl-sm border-b-4 max-w-max m-auto mt-0 mb-2 text-4xl font-medium leading-tight text-primary bg-clip-text bg-gradient-to-r p-4'>
        منتجاتنا
      </h1>
      <p className='font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl'>
        اختر مايناسب بيتك
      </p>
      <div className='flex flex-wrap sm:flex-nowrap gap-5 px-7 mt-7 justify-between sm:justify-center'>
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => {
              setProducts(category.data);
            }}
            class='flex flex-row-reverse w-[35%] sm:w-auto bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md'>
            <div className='m-auto'>{category.icon}</div>
            <div className='mx-2'>{category.name}</div>
          </button>
        ))}
      </div>
      <div className='mx-auto max-w-2xl py-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
        <div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
          {products.map((product) => (
            <div
              key={product.id}
              className='group relative c-card p-2 shadow hover:shadow-lg rounded-md'>
              <div className='min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-95 lg:aspect-none lg:h-80'>
                <div className='bg-green-700 bg-opacity-70  absolute z-10 right-5 top-5 w-9 p-1 rounded-md color h-9 cursor-pointer'>
                  <ImZoomIn
                    size={30}
                    color='white'
                    onClick={() => togglePopup(product.imageSrc)}
                  />
                </div>
                <Image
                  width={0}
                  height={0}
                  sizes='(min-width: 640px) 50vw,
              (min-width: 1024px) 25vw,
             100vw"'
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className='h-full w-full object-contain bg-white'
                />
              </div>
              <div className='mt-4 flex justify-between flex-row-reverse'>
                <div>
                  <h3 className='text-sm text-gray-700'>
                    <a href={product.href}>{product.name}</a>
                  </h3>
                  <p className='mt-1 text-sm text-gray-500'>{product.color}</p>
                </div>
                <p className='text-sm font-medium text-gray-900'>
                  {product.price}
                </p>
              </div>
              <div className='flex justify-between mt-4'>
                <button class='flex flex-row-reverse justify-between bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md'>
                  <div className='m-auto'>
                    <BiDetail />
                  </div>
                  <div className='mx-2'>تفاصيل</div>
                </button>
                <a href='tel:+201223657955'>
                  <button
                    // key={category.id}
                    class='flex flex-row-reverse justify-between bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md'>
                    <div className='m-auto'>
                      <BsFillTelephoneFill />
                    </div>
                    <div className='mx-2'>طلب الأن</div>
                  </button>
                </a>
              </div>
            </div>
          ))}
          {isPopupOpen && (
            <PopUp imageSrc={selectedImage} onClose={closePopUp} />
          )}
        </div>
      </div>
    </section>
  );
};

export default Products;
