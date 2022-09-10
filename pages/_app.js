import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Script from "next/script";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Script
        id="bootstrap-cdn"
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" />
    </>

  );
}



export default MyApp
