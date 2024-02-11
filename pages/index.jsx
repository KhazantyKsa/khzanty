import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "../styles/Home.module.css";
import { NavBar } from "../components/NavBar";
import Slider from "../components/Slider";
import About from "../components/About";
import Products from "../components/Products";
import Location from "../components/Location";
import Contact from "../components/Contact";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div className='bg-white'>
      <Head>
        <title>نجار لتفصيل الخزائن</title>
        <meta
          name='description'
          content='خزانتي - شركة تصميم وتصنيع الخزائن الحديثة والعصرية، تقدم أحدث المنتجات عالية الجودة التي تتناسب مع جميع الأذواق والأنماط. تتميز خزائننا بالتصميم الفريد والوظائف الذكية والتخزين الفعال، مما يجعلها الخيار الأمثل لمن يبحثون عن خزائن متينة وعملية وجميلة. اختر خزانتك المفضلة من تشكيلتنا الواسعة وتمتع بتخزين منظم وجذاب لأغراضك الشخصية والملابس والأحذية والإكسسوارات'
        />
        <meta name='title' content='خزانتى  – صمم  أحدث منتجات الخزائن' />
        <meta
          name='keywords'
          content='اثاث, خزانه, خزانات, مقعد, مقاعد, سرير, سراير, طاوله, طاولات, اثاث منزلي , صيانة اثاث, غرف نوم'
        />
      </Head>
      <Slider />
      {/*components*/}
      <About />
      <Products />
      <Location />
      <Contact />
      <Footer />
    </div>
  );
}
