import { useState, useEffect } from "react";
import Image from "next/image";
import ImgPopUp from "./popups/ImgPopUp";
import DetailsPopUp from "./popups/DetailsPopUp";
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
  { id: 4, name: "سراير", icon: <BiBed />, data: Beds },
  { id: 3, name: "خزانات", icon: <GiArabicDoor />, data: Wardrobes },
];

const Products = () => {
  const [products, setProducts] = useState(AllProducts);

  // image popup
  const [isImgPopupOpen, setIsImgPopupOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const toggleImgPopup = (image) => {
    setIsImgPopupOpen(!isImgPopupOpen);
    setSelectedImage(image);
  };
  const closeImgPopUp = () => {
    setIsImgPopupOpen(false);
  };

  // details popup
  const [isDetailsPopupOpen, setIsDetailsPopupOpen] = useState(false);
  const [selectedName, setSelectedName] = useState();
  const [selectedDetails, setSelectedDetails] = useState();
  const [selectedCode, setSelectedCode] = useState();

  const toggleDetailsPopup = (image, name, details, code) => {
    setIsDetailsPopupOpen(!isDetailsPopupOpen);
    setSelectedImage(image);
    setSelectedName(name);
    setSelectedDetails(details);
    setSelectedCode(code);
  };
  const closeDetailsPopUp = () => {
    setIsDetailsPopupOpen(false);
  };

  // data shuffle
  const shuffle = (arr) => {
    arr.sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    const productClone = products.slice();
    shuffle(productClone);
    setProducts(productClone);
  }, []);

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
              const productClone = category.data.slice();
              shuffle(productClone);
              setProducts(productClone);
              window.scrollTo({
                top: 1600,
                behavior: "smooth",
              });
            }}
            class='flex flex-row-reverse w-[35%] sm:w-auto bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md'>
            <div className='m-auto'>{category.icon}</div>
            <div className='mx-2'>{category.name}</div>
          </button>
        ))}
      </div>
      <div className='mx-auto max-w-2xl py-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
        <div
          id='all-products'
          className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ease-in duration-200'>
          {products.map((product) => (
            <div
              key={product.id}
              className='group relative c-card p-2 shadow hover:shadow-lg rounded-md'>
              <div className='min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-95 lg:aspect-none lg:h-80'>
                <div className='bg-green-700 bg-opacity-70  absolute z-10 right-5 top-5 w-9 p-1 rounded-md color h-9 cursor-pointer'>
                  <ImZoomIn
                    size={30}
                    color='white'
                    onClick={() => toggleImgPopup(product.imageSrc)}
                  />
                </div>
                <Image
                  suppressHydrationWarning
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
                  <h3 className='text-sm text-gray-700 text-right'>
                    <a href={product.href} suppressHydrationWarning>
                      {product.name}
                    </a>
                  </h3>
                </div>
                <p className='text-sm font-normal text-gray-900'>
                  كود:
                  <span className='font-bold' suppressHydrationWarning>
                    {product.code}
                  </span>
                </p>
              </div>
              <div className='flex justify-between mt-4'>
                <button
                  onClick={() =>
                    toggleDetailsPopup(
                      product.imageSrc,
                      product.name,
                      product.details,
                      product.code
                    )
                  }
                  class='flex flex-row-reverse justify-between bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md'>
                  <div className='m-auto'>
                    <BiDetail />
                  </div>
                  <div className='mx-2'>تفاصيل</div>
                </button>
                <a href='tel:+9660570776738'>
                  <button class='flex flex-row-reverse justify-between bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md'>
                    <div className='m-auto'>
                      <BsFillTelephoneFill />
                    </div>
                    <div className='mx-2'>طلب الأن</div>
                  </button>
                </a>
              </div>
            </div>
          ))}
          {isImgPopupOpen && (
            <ImgPopUp imageSrc={selectedImage} onClose={closeImgPopUp} />
          )}
          {isDetailsPopupOpen && (
            <DetailsPopUp
              imageSrc={selectedImage}
              name={selectedName}
              details={selectedDetails}
              code={selectedCode}
              onClose={closeDetailsPopUp}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Products;
