import '@/styles/globals.css';

import NavBar from '../components/NavBar';
export default function App({ Component, pageProps })
{
  return (<>
    <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-WJ8VH84DSP"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-WJ8VH84DSP');
</script>
    <NavBar />
    <Component { ...pageProps } />
  </>
  );
}
