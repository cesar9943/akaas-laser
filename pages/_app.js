import AOS from "aos";
import React from "react";
import "react-accessible-accordion/dist/fancy-example.css";
import "swiper/css";
import "swiper/css/bundle";
import "../node_modules/aos/dist/aos.css";
import "../styles/animate.min.css";
import "../styles/bootstrap.min.css";
import "../styles/remixicon.css";
// Navbar CSS
import "../styles/navbar.css";
// Footer CSS
import "../styles/footer.css";
// Globals CSS
import "../styles/globals.css";
// Responsive CSS
import "../styles/responsive.css";

import ScrollToTop from "@/components/Layout/ScrollToTop";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
        <title>AKAAS Laser MedSpa | Orlando, FL Medical Spa</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Medical spa in Orlando, Florida specializing in laser hair removal, body contouring, facials, and advanced aesthetic therapies."
        />
        <meta
          name="keywords"
          content="medical spa Orlando, laser hair removal Orlando, body contouring Orlando, facials Orlando, aesthetic treatments Orlando, med spa Orlando"
        />
        <meta name="author" content="Armando Cesar Martin Calderón" />
        <meta name="robots" content="index, follow" />
      </Head>

      <Component {...pageProps} />

      <ScrollToTop />
    </>
  );
}

export default MyApp;
