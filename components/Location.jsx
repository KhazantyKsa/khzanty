// social media
import Social from "./Social";

// icons
import { ImLocation2 } from "react-icons/im";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const contactInfo = [
  {
    id: 1,
    text: "الحسين بن علي ,ال مصاف ,الرياض ,المملكه العربيه السعوديه",
    icon: <ImLocation2 className='m-auto' color='green' />,
    href:
      "https://www.google.com/maps/@29.300449,31.201127,16z?hl=arhttps://www.google.com/maps/place/24%C2%B046'09.6%22N+46%C2%B041'21.3%22E/@24.7693249,46.6870564,17z/data=!3m1!4b1!4m4!3m3!8m2!3d24.7693249!4d46.6892451?hl=en",
  },
  {
    id: 2,
    text: "+966570776738",
    icon: <BsFillTelephoneFill className='m-auto' color='green' />,
    href: "tel:+966570776738",
  },
  {
    id: 3,
    text: "kazantyksa@gmail.com",
    icon: <MdEmail className='m-auto' color='green' />,
    href: "mailto: kazantyksa@gmail.com",
  },
];

const Location = () => {
  return (
    <section className='flex flex-col bg-slate-50 justify-center' id='location'>
      <div>
        <h1 className='text-green-600 border-b-green-700 rounded-bl-sm border-b-4 max-w-max m-auto mt-0 mb-5 text-4xl font-medium leading-tight text-primary bg-clip-text bg-gradient-to-r p-4'>
          موقعنا
        </h1>
        <p className='font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl'>
          ستسعدنا زيارتك لنا في اي وقت
        </p>
      </div>

      <div className='flex justify-center md:flex-row-reverse flex-col-reverse '>
        <div className='text-center m-auto md:w-1/2 w-full'>
          {contactInfo.map((info) => (
            <a key={info.id} href={info.href} target='_blank'>
              <div className='my-5'>
                {info.icon}
                <p>{info.text}</p>
              </div>
            </a>
          ))}
          <Social />
        </div>
        <div className='flex mt-10'>
          <div className='w-full m-3 shadow-lg'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3622.7626770538786!2d46.687056415000825!3d24.76932488409696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDQ2JzA5LjYiTiA0NsKwNDEnMjEuMyJF!5e0!3m2!1sen!2seg!4v1681541413132!5m2!1sen!2seg'
              width='100%'
              height='600'
              className='p-0 md:w-[65vw]'
              allowfullscreen=''
              loading='lazy'
              style={{ border: "0", margin: "auto", display: "block" }}
              referrerpolicy='no-referrer-when-downgrade'></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
