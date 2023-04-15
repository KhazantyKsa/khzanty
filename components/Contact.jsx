import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  RiWhatsappFill,
  RiFacebookCircleFill,
  RiInstagramFill,
} from "react-icons/ri";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9q1lq28",
        "template_pirylgr",
        form.current,
        "_8VNZ27jyRT1TqOke"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          window.scrollTo(0, document.body.scrollHeight);
          document.getElementById("alert").classList.remove("hidden");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section className='bg-white' id='contact'>
      <div className='py-8 lg:py-16 px-4 mx-auto max-w-screen-md'>
        <h1 className='text-green-600 border-b-green-700 rounded-bl-sm border-b-4 max-w-max m-auto mt-0 mb-2 text-4xl font-medium leading-tight text-primary bg-clip-text bg-gradient-to-r p-4'>
          تواصل معنا
        </h1>
        <p className='mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl'>
          سيسعدنا مساعدتدك في حال وجود اي استفسارات او شكاوي
        </p>
        <form ref={form} className='space-y-8' onSubmit={sendEmail}>
          <div>
            <label
              for='email'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600 text-right'>
              بريدك الألكتروني
            </label>
            <input
              type='email'
              id='email'
              name='from_email'
              className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light text-right'
              placeholder='name@examble.com'
              required
            />
          </div>
          <div>
            <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600 text-right'>
              رقم الهاتف
            </label>
            <input
              type='text'
              id='subject'
              name='from_phone'
              className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light text-right'
              placeholder='01090677513'
              required
            />
          </div>
          <div className='sm:col-span-2'>
            <label
              for='message'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600 text-right'>
              كيف يمكننا مساعدتك ؟
            </label>
            <textarea
              id='message'
              rows='6'
              name='message'
              className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light text-right'
              placeholder='من فضلك اترك رسالتك هنا'></textarea>
          </div>
          <button
            type='submit'
            value='Send'
            className=' my-auto text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800'>
            أرسال
          </button>
          <div
            id='alert'
            class='m-auto mb-5 ease-in duration-200 hidden flex justify-center text-green-600 bg-green-400 w-1/2 items-center rounded-lg bg-success-100 px-6 py-5 text-base text-success-700 '
            role='alert'>
            <span class='mr-2'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                class='h-5 w-5'>
                <path
                  fill-rule='evenodd'
                  d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z'
                  clip-rule='evenodd'
                />
              </svg>
            </span>
            تم ارسال رسالتك وسيتم الرد عليها في اسرع وقت
          </div>
        </form>
      </div>
      <div className='flex justify-center mb-7 space-x-8'>
        <a href='#' className='cursor-pointer'>
          <RiWhatsappFill className='h-9 w-8 fill-green-700 hover:w-12' />
        </a>
        <a href='#' className='cursor-pointer'>
          <RiFacebookCircleFill className='h-9 w-8 fill-blue-700 hover:w-12' />
        </a>
        <a
          href='https://www.instagram.com/ramzyamgd/'
          className='cursor-pointer'>
          <RiInstagramFill className='h-9 w-8 fill-purple-700 hover:w-12' />
        </a>
      </div>
    </section>
  );
};

export default Contact;
