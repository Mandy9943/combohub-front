import { fetcher } from "@/utils/api";
import baseApiUrl from "@/utils/baseApiUrl";
import { parseImagesUrls } from "@/utils/urls";
import Link from "next/link";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import useSwr from "swr";
const Article = () => {
  const { data: blogs } = useSwr(`${baseApiUrl}/api/blogs?populate=*`, fetcher);

  return (
    <>
      <div className="blog-area pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <span>Mantente actualizado</span>
            <h2>
              Lee nuestro blog para recibir noticias <b> actualizadas</b>
            </h2>
          </div>

          {blogs && (
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 6000,
                disableOnInteraction: true,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
              }}
              modules={[Autoplay, Pagination]}
              className="mySwiper blog-slides"
              data-aos="fade-up"
              data-aos-delay="80"
              data-aos-duration="800"
              data-aos-once="true"
            >
              {blogs.data.slice(0, 5).map((blog) => (
                <SwiperSlide key={blog.id}>
                  <div className="blog-card">
                    <div className="row align-items-center">
                      <div className="col-lg-6">
                        <div className="blog-image">
                          <Link href={`/blog/${blog.attributes.slug}`}>
                            <a>
                              <img
                                src={parseImagesUrls(
                                  blog.attributes.image.data.attributes.url
                                )}
                                alt={
                                  blog.attributes.image.data.attributes
                                    .alternativeText
                                }
                              />
                            </a>
                          </Link>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="blog-content">
                          <div className="date">{blog.attributes.date}</div>
                          <h3>
                            <Link href={`/blog/${blog.attributes.slug}`}>
                              <a>{blog.attributes.title}</a>
                            </Link>
                          </h3>
                          <p>{blog.attributes.shortText}</p>
                          <Link href={`/blog/${blog.attributes.slug}`}>
                            <a className="blog-btn">View More</a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
          {blogs?.data.length === 0 && (
            <p className="text-center">
              ¡Próximamente! Estamos trabajando en la creación de contenido
              interesante y útil para nuestra comunidad. ¡Vuelve pronto para
              descubrir nuestros primeros artículos de blog!
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Article;
