// icons
import {
  RiWhatsappFill,
  RiFacebookCircleFill,
  RiInstagramFill,
} from "react-icons/ri";

const Social = () => {
  return (
    <>
      <h1 className='text-green-700 text-3xl font-bold text-center mb-3 tracking-normal'>
        : تابعنا
      </h1>
      <div className='flex justify-center mb-7 space-x-8'>
        <a
          href='https://wa.link/s5gxok'
          target='blank'
          className='cursor-pointer'>
          <RiWhatsappFill className='h-9 w-8 fill-green-700 hover:w-12 ease-in duration-150' />
        </a>
        <a
          href='https://www.facebook.com/profile.php?id=100092286127335'
          target='blank'
          className='cursor-pointer'>
          <RiFacebookCircleFill className='h-9 w-8 fill-blue-700 hover:w-12 ease-in duration-150' />
        </a>
        <a
          href='https://www.instagram.com/ramzyamgd/'
          target='blank'
          className='cursor-pointer'>
          <RiInstagramFill className='h-9 w-8 fill-purple-700 hover:w-12 ease-in duration-150' />
        </a>
      </div>
    </>
  );
};

export default Social;
