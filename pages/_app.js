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
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="ComboHub es una plataforma en línea de compras colectivas para Cuba. Ofrecemos descuentos exclusivos en productos y servicios de calidad, al tiempo que brindamos una experiencia de usuario única e intuitiva."
        />
        <meta
          name="keywords"
          content="compras colectivas, descuentos, ofertas, Cuba, combos"
        />
        <meta name="author" content="ComboHub" />
        <meta
          property="og:title"
          content="ComboHub - Compras colectivas para Cuba"
        />
        <meta
          property="og:description"
          content="ComboHub es una plataforma en línea de compras colectivas para Cuba. Ofrecemos descuentos exclusivos en productos y servicios de calidad, al tiempo que brindamos una experiencia de usuario única e intuitiva."
        />
        <meta
          property="og:image"
          content="https:/combohub.website/images/logo.png"
        />
        <meta property="og:url" content="https:/combohub.website/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="ComboHub - Compras colectivas para Cuba"
        />
        <meta
          name="twitter:description"
          content="ComboHub es una plataforma en línea de compras colectivas para Cuba. Ofrecemos descuentos exclusivos en productos y servicios de calidad, al tiempo que brindamos una experiencia de usuario única e intuitiva."
        />
        <meta
          name="twitter:image"
          content="https:/combohub.website/images/logo.png"
        />
        <title>ComboHub - Compras colectivas para Cuba</title>
      </Head>

      <ChakraProvider theme={customTheme}>
        <Component {...pageProps} />
      </ChakraProvider>

      <ScrollToTop />
    </>
  );
}

export default MyApp;
