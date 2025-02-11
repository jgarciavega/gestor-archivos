// pages/_app.js
import '../styles/globals.css'; 
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Esta función se ejecutará cuando la página esté cargada
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
