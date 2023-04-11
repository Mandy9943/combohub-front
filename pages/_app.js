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
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import customTheme from "styles/chakratheme/theme";

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
        <title>
          Stax - React IT Solutions & Services Template with Strapi CMS
        </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ChakraProvider theme={customTheme}>
        <Component {...pageProps} />
      </ChakraProvider>

      <ScrollToTop />
    </>
  );
}

export default MyApp;
