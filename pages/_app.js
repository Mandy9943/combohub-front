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
import Metas from "@/components/Metas/Metas";
import { ChakraProvider } from "@chakra-ui/react";
import customTheme, { customColorModeManager } from "styles/chakratheme/theme";

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Metas />

      <ChakraProvider
        theme={customTheme}
        colorModeManager={customColorModeManager}
      >
        <Component {...pageProps} />
      </ChakraProvider>

      <ScrollToTop />
    </>
  );
}

export default MyApp;
