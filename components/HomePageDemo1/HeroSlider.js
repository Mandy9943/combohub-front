import { fetcher } from "@/utils/api";
import { parseImagesUrls } from "@/utils/urls";
import Link from "next/link";
import { Autoplay, EffectFade, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import useSwr from "swr";
const HeroSlider = () => {
  const { data: heroSlider } = useSwr(
    "/api/hero-slider-home-1?populate=sliderITem.image",
    fetcher,
    {
      fallbackData: {
        data: {
          id: 1,
          attributes: {
            createdAt: "2023-04-13T15:56:21.208Z",
            updatedAt: "2023-04-14T04:25:12.995Z",
            publishedAt: "2023-04-13T15:56:23.246Z",
            sliderITem: [
              {
                id: 1,
                subTitle: "¡COMBOS DE MODA AL MEJOR PRECIO!",
                title: "Descubre Increíbles Ofertas en ComboHub",
                shortDec:
                  "ComboHub es la solución líder en la venta de combos de productos de moda, brindando excelentes ofertas en ropa, zapatos y accesorios a clientes de todo el mundo. Nuestro compromiso es ofrecerte una experiencia de compra única, combinando artículos de alta calidad con descuentos inigualables. ¡Explora nuestras opciones y comienza a ahorrar en tus compras hoy mismo!",
                btnText: "Compra tu combo hoy",
                btnLink: "/services/services/",
                image: {
                  data: {
                    id: 6,
                    attributes: {
                      name: "home1.webp",
                      alternativeText: "home1.webp",
                      caption: "home1.webp",
                      width: 1024,
                      height: 1024,
                      formats: {
                        large: {
                          ext: ".jfif",
                          url: "/uploads/large_home1_81a75b4f08.jfif",
                          hash: "large_home1_81a75b4f08",
                          mime: "image/webp",
                          name: "large_home1.webp",
                          path: null,
                          size: 82.48,
                          width: 1000,
                          height: 1000,
                        },
                        small: {
                          ext: ".jfif",
                          url: "/uploads/small_home1_81a75b4f08.jfif",
                          hash: "small_home1_81a75b4f08",
                          mime: "image/webp",
                          name: "small_home1.webp",
                          path: null,
                          size: 33.9,
                          width: 500,
                          height: 500,
                        },
                        medium: {
                          ext: ".jfif",
                          url: "/uploads/medium_home1_81a75b4f08.jfif",
                          hash: "medium_home1_81a75b4f08",
                          mime: "image/webp",
                          name: "medium_home1.webp",
                          path: null,
                          size: 62.8,
                          width: 750,
                          height: 750,
                        },
                        thumbnail: {
                          ext: ".jfif",
                          url: "/uploads/thumbnail_home1_81a75b4f08.jfif",
                          hash: "thumbnail_home1_81a75b4f08",
                          mime: "image/webp",
                          name: "thumbnail_home1.webp",
                          path: null,
                          size: 6.84,
                          width: 156,
                          height: 156,
                        },
                      },
                      hash: "home1_81a75b4f08",
                      ext: ".jfif",
                      mime: "image/webp",
                      size: 44.4,
                      url: "/uploads/home1_81a75b4f08.jfif",
                      previewUrl: null,
                      provider: "local",
                      provider_metadata: null,
                      createdAt: "2023-04-13T15:55:48.679Z",
                      updatedAt: "2023-04-14T04:16:28.845Z",
                    },
                  },
                },
              },
              {
                id: 2,
                subTitle: "NUESTRA SELECCIÓN, TU SATISFACCIÓN",
                title: "Combinamos Estilo y Valor",
                shortDec:
                  "Trabajamos en estrecha colaboración con proveedores confiables para seleccionar y agrupar cuidadosamente productos de moda. Nuestro enfoque está en ofrecerte combos que no solo estén a la vanguardia de las tendencias, sino que también te proporcionen un valor excepcional en cada compra. ¡La satisfacción de nuestros clientes es nuestra prioridad!",
                btnText: "Obtén más por menos",
                btnLink: "/services/services/",
                image: {
                  data: {
                    id: 7,
                    attributes: {
                      name: "Diseño sin título2.png",
                      alternativeText: "Diseño sin título2.png",
                      caption: "Diseño sin título2.png",
                      width: 1024,
                      height: 1024,
                      formats: {
                        large: {
                          ext: ".png",
                          url: "/uploads/large_Diseno_sin_titulo2_2ad5e60bab.png",
                          hash: "large_Diseno_sin_titulo2_2ad5e60bab",
                          mime: "image/webp",
                          name: "large_Diseño sin título2.png",
                          path: null,
                          size: 36,
                          width: 1000,
                          height: 1000,
                        },
                        small: {
                          ext: ".png",
                          url: "/uploads/small_Diseno_sin_titulo2_2ad5e60bab.png",
                          hash: "small_Diseno_sin_titulo2_2ad5e60bab",
                          mime: "image/webp",
                          name: "small_Diseño sin título2.png",
                          path: null,
                          size: 16.17,
                          width: 500,
                          height: 500,
                        },
                        medium: {
                          ext: ".png",
                          url: "/uploads/medium_Diseno_sin_titulo2_2ad5e60bab.png",
                          hash: "medium_Diseno_sin_titulo2_2ad5e60bab",
                          mime: "image/webp",
                          name: "medium_Diseño sin título2.png",
                          path: null,
                          size: 26.2,
                          width: 750,
                          height: 750,
                        },
                        thumbnail: {
                          ext: ".png",
                          url: "/uploads/thumbnail_Diseno_sin_titulo2_2ad5e60bab.png",
                          hash: "thumbnail_Diseno_sin_titulo2_2ad5e60bab",
                          mime: "image/webp",
                          name: "thumbnail_Diseño sin título2.png",
                          path: null,
                          size: 4.02,
                          width: 156,
                          height: 156,
                        },
                      },
                      hash: "Diseno_sin_titulo2_2ad5e60bab",
                      ext: ".png",
                      mime: "image/webp",
                      size: 45.58,
                      url: "/uploads/Diseno_sin_titulo2_2ad5e60bab.png",
                      previewUrl: null,
                      provider: "local",
                      provider_metadata: null,
                      createdAt: "2023-04-13T15:57:41.970Z",
                      updatedAt: "2023-04-14T04:24:58.444Z",
                    },
                  },
                },
              },
              {
                id: 3,
                subTitle: "ENVÍO INTERNACIONAL GARANTIZADO",
                title: "Compra en EE. UU. Recibe en Cuba",
                shortDec:
                  "En ComboHub, entendemos la importancia de recibir tus productos de manera rápida y segura. Nuestros proveedores en Estados Unidos preparan y envían los combos directamente a Cuba, asegurando una entrega eficiente y sin complicaciones. Ten en cuenta que el tiempo de entrega puede variar debido a la logística de envío internacional, pero nos esforzamos por brindarte una experiencia de compra sin igual. ¡Confía en ComboHub para tus compras internacionales!",
                btnText: "¡Compra ahora y ahorra!",
                btnLink: "/services/services/",
                image: {
                  data: {
                    id: 8,
                    attributes: {
                      name: "De EE. UU. a Cuba.png",
                      alternativeText: "De EE. UU. a Cuba.png",
                      caption: "De EE. UU. a Cuba.png",
                      width: 1024,
                      height: 1024,
                      formats: {
                        large: {
                          ext: ".png",
                          url: "/uploads/large_De_EE_UU_a_Cuba_7a8d613de5.png",
                          hash: "large_De_EE_UU_a_Cuba_7a8d613de5",
                          mime: "image/png",
                          name: "large_De EE. UU. a Cuba.png",
                          path: null,
                          size: 1065.96,
                          width: 1000,
                          height: 1000,
                        },
                        small: {
                          ext: ".png",
                          url: "/uploads/small_De_EE_UU_a_Cuba_7a8d613de5.png",
                          hash: "small_De_EE_UU_a_Cuba_7a8d613de5",
                          mime: "image/png",
                          name: "small_De EE. UU. a Cuba.png",
                          path: null,
                          size: 328.56,
                          width: 500,
                          height: 500,
                        },
                        medium: {
                          ext: ".png",
                          url: "/uploads/medium_De_EE_UU_a_Cuba_7a8d613de5.png",
                          hash: "medium_De_EE_UU_a_Cuba_7a8d613de5",
                          mime: "image/png",
                          name: "medium_De EE. UU. a Cuba.png",
                          path: null,
                          size: 681.48,
                          width: 750,
                          height: 750,
                        },
                        thumbnail: {
                          ext: ".png",
                          url: "/uploads/thumbnail_De_EE_UU_a_Cuba_7a8d613de5.png",
                          hash: "thumbnail_De_EE_UU_a_Cuba_7a8d613de5",
                          mime: "image/png",
                          name: "thumbnail_De EE. UU. a Cuba.png",
                          path: null,
                          size: 45.42,
                          width: 156,
                          height: 156,
                        },
                      },
                      hash: "De_EE_UU_a_Cuba_7a8d613de5",
                      ext: ".png",
                      mime: "image/png",
                      size: 286.04,
                      url: "/uploads/De_EE_UU_a_Cuba_7a8d613de5.png",
                      previewUrl: null,
                      provider: "local",
                      provider_metadata: null,
                      createdAt: "2023-04-13T15:59:51.314Z",
                      updatedAt: "2023-04-14T04:19:05.121Z",
                    },
                  },
                },
              },
            ],
          },
        },
        meta: {},
      },
    }
  );

  return (
    <>
      {heroSlider && (
        <div className="main-slides-area">
          <Swiper
            spaceBetween={0}
            effect={"fade"}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 10000,
              disableOnInteraction: true,
            }}
            modules={[EffectFade, Pagination, Autoplay]}
            className="mySwiper home-slides"
            lazy={true}
          >
            {heroSlider.data.attributes.sliderITem.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="main-slides-item">
                  <div className="container-fluid">
                    <div className="row align-items-center">
                      <div className="col-lg-7 col-md-12">
                        <div className="main-slides-content">
                          <span
                            data-aos="fade-right"
                            data-aos-delay="70"
                            data-aos-duration="700"
                            data-aos-once="true"
                          >
                            {item.subTitle}
                          </span>
                          <h1
                            data-aos="fade-right"
                            data-aos-delay="70"
                            data-aos-duration="700"
                            data-aos-once="true"
                          >
                            {item.title}
                          </h1>
                          <p
                            data-aos="fade-right"
                            data-aos-delay="70"
                            data-aos-duration="700"
                            data-aos-once="true"
                          >
                            {item.shortDec}
                          </p>

                          <div
                            className="slides-btn"
                            data-aos="fade-right"
                            data-aos-delay="70"
                            data-aos-duration="700"
                            data-aos-once="true"
                          >
                            <Link href={item.btnLink}>
                              <a className="default-btn">{item.btnText}</a>
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div
                        className="col-lg-5 col-md-12"
                        data-aos="fade-down"
                        data-aos-delay="70"
                        data-aos-duration="700"
                        data-aos-once="true"
                      >
                        <div className="main-slides-image">
                          <img
                            src={parseImagesUrls(
                              item.image.data.attributes.url
                            )}
                            alt={item.image.data.attributes.alternativeText}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Shape Images */}
          <div className="main-slides-shape-1">
            <img src="/images/home-slides/slides-shape-1.png" alt="image" />
          </div>
          <div className="main-slides-shape-2">
            <img src="/images/home-slides/slides-shape-2.png" alt="image" />
          </div>
          <div className="main-slides-shape-3">
            <img src="/images/home-slides/slides-shape-3.png" alt="image" />
          </div>
          <div className="main-slides-shape-4">
            <img src="/images/home-slides/slides-shape-4.png" alt="image" />
          </div>
          <div className="main-slides-shape-5">
            <img src="/images/home-slides/slides-shape-5.png" alt="image" />
          </div>
        </div>
      )}
    </>
  );
};

export default HeroSlider;
