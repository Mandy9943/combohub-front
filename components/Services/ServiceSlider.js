import { fetcher } from "@/utils/api";
import baseApiUrl from "@/utils/baseApiUrl";
import Link from "next/link";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import useSwr from "swr";
import SingleServiceCard from "./SingleServiceCard";
const ServiceSlider = () => {
  const { data: services } = useSwr(
    `${baseApiUrl}/api/services?populate=*`,
    fetcher
  );

  return (
    <>
      <div className="services-area with-radius ptb-100">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-12">
              <div
                className="services-section-content"
                data-aos="fade-down"
                data-aos-delay="80"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <span>Descubre Nuestros Combos</span>
                <h3>
                  <b>Productos Exclusivos</b>
                </h3>
                <p>
                  Explora nuestra selección de combos únicos de moda y estilo,
                  diseñados para realzar tu vida cotidiana y adaptarse a tus
                  necesidades.
                </p>
                <div className="services-section-btn">
                  <Link href="/services/services">
                    <a className="default-btn">Explorar todos los combos</a>
                  </Link>
                </div>
              </div>
            </div>

            {services && (
              <div className="col-lg-8 col-md-12">
                <Swiper
                  slidesPerView={1}
                  spaceBetween={30}
                  pagination={{
                    clickable: true,
                  }}
                  autoplay={{
                    delay: 10000,
                    disableOnInteraction: true,
                  }}
                  loop={true}
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 2,
                    },
                    1024: {
                      slidesPerView: 3,
                    },
                  }}
                  modules={[Autoplay, Pagination]}
                  className="mySwiper services-slides"
                >
                  {services.data.slice(0, 6).map((service) => (
                    <SwiperSlide key={service.id}>
                      <SingleServiceCard service={service} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceSlider;
