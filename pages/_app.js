import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Toaster } from "react-hot-toast";

import { ParallaxProvider } from "react-scroll-parallax";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useRouter } from "next/router";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const router = useRouter();
  const showHeader = router.pathname === "/" ? false : true;
  return (
    <>
      <Toaster />
      {showHeader && <Navbar />}

      <ParallaxProvider>
        <Component {...pageProps} />
      </ParallaxProvider>
      {showHeader && <Footer />}
    </>
  );
}

export default MyApp;
