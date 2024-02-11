import '@/styles/globals.css';

import NavBar from '../components/NavBar';
export default function App({ Component, pageProps })
{
  return (<>


<Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-WJ8VH84DSP`}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WJ8VH84DSP');
            `}
      </Script>
    <NavBar />
    <Component { ...pageProps } />
  </>
  );
}
