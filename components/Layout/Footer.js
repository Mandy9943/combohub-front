import baseApiUrl from "@/utils/baseApiUrl";
import { parseImagesUrls } from "@/utils/urls";
import axios from "axios";
import Link from "next/link";
import React from "react";

const Footer = () => {
  // Logo API
  const [logo, setLogo] = React.useState();
  React.useEffect(() => {
    const getLogo = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/site-logo?populate=*`
      );
      setLogo(response.data);
      // console.log(response.data);
    };
    getLogo();
  }, []);
  // End Logo API
  return (
    <>
      <footer className="footer-area with-black-background pt-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-6">
              <div
                className="single-footer-widget"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="500"
                data-aos-once="true"
              >
                <div className="widget-logo">
                  {logo && (
                    <Link href="/">
                      <a className="navbar-brand">
                        <img
                          src={parseImagesUrls(
                            logo.data.attributes.whiteLogo.data.attributes.url
                          )}
                          alt={
                            logo.data.attributes.whiteLogo.data.attributes
                              .alternativeText
                          }
                        />
                      </a>
                    </Link>
                  )}
                </div>
                <p>
                  Descubre una experiencia de compra única con nuestra selección
                  de combos de moda y estilo. ¡Gracias por elegirnos!
                </p>

                {/*  <ul className="widget-social">
                  <li>
                    <a
                      href="https://www.facebook.com/EnvyTheme"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="ri-facebook-fill"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/?lang=en"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="ri-twitter-fill"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="ri-youtube-fill"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://vimeo.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="ri-vimeo-fill"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="ri-instagram-line"></i>
                    </a>
                  </li>
                </ul> */}
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div
                className="single-footer-widget ps-5"
                data-aos="fade-up"
                data-aos-delay="60"
                data-aos-duration="600"
                data-aos-once="true"
              >
                <h3>Combos</h3>

                <ul className="quick-links">
                  <li>
                    <Link href="/services/estilo-esencial/">
                      <a>1. Estilo esencial</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div
                className="single-footer-widget ps-5"
                data-aos="fade-up"
                data-aos-delay="70"
                data-aos-duration="700"
                data-aos-once="true"
              >
                <h3>Páginas</h3>

                <ul className="quick-links">
                  <li>
                    <Link href="/contact">
                      <a>Contáctanos</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq">
                      <a>Preguntas Frecuentes</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms-of-service">
                      <a>Terminos del servicio</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy">
                      <a>Políticas de privacidad</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div
                className="single-footer-widget"
                data-aos="fade-up"
                data-aos-delay="80"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <h3>Subscríbete</h3>

                <form className="newsletter-form">
                  <input
                    type="email"
                    className="input-newsletter"
                    placeholder="Tu correo electrónico"
                    name="EMAIL"
                    required
                  />

                  <button type="submit" className="default-btn">
                    Subscribirse
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright-area">
          <div className="container">
            <div className="copyright-area-content">
              <p>ComboHub © 2023</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
