import Rating from "@/components/Common/Rating";
import Footer from "@/components/Layout/Footer";
import NavbarTwo from "@/components/Layout/NavbarTwo";
import { fetcher } from "@/utils/api";
import baseApiUrl from "@/utils/baseApiUrl";
import { parseImagesUrls } from "@/utils/urls";
import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import useSwr from "swr";

export default function Testimonials() {
  const { data: testimonials } = useSwr(
    `${baseApiUrl}/api/testimonials-style-1?populate=item.image`,
    fetcher
  );
  return (
    <>
      <NavbarTwo />

      <div
        className="page-banner-area mt-94"
        style={{ backgroundImage: `url(/images/page-banner/banner-bg-5.jpg` }}
      >
        <div className="container">
          <div
            className="page-banner-content"
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-once="true"
          >
            <h2>Testimonios</h2>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>Testimonios</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="testimonials-area pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <span>TESTIMONIOS</span>
            <h2>La Opinión de nuestros clientes</h2>
          </div>
          {testimonials && (
            <div className="row justify-content-center">
              {testimonials.data.attributes.item.map((info) => {
                return (
                  <div className="col-lg-4 col-md-6" key={info.id}>
                    <div
                      className="single-testimonials-card"
                      data-aos="fade-up"
                      data-aos-delay="50"
                      data-aos-duration="500"
                      data-aos-once="true"
                    >
                      <p>{info.feedbackText}</p>

                      <Flex className="info-item-box" gap={3}>
                        <Box position={"relative"} boxSize={"55px"}>
                          <Image
                            width={info.image.data.attributes.width}
                            height={info.image.data.attributes.height}
                            layout="fill"
                            objectFit="cover"
                            src={parseImagesUrls(
                              info.image.data.attributes.url
                            )}
                            className="rounded-circle"
                            alt="image"
                          />
                        </Box>
                        <Box>
                          <h4>
                            {info.name} <span>{info.designation}</span>
                          </h4>
                          <Rating text={info.name} />
                        </Box>
                      </Flex>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}
