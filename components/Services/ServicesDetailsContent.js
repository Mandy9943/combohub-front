import { Box } from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";

const ServicesDetailsContent = ({
  attributes: {
    servicesDetailsText,
    image: {
      data: {
        attributes: { url: imageUrl },
      },
    },
    price,
  },
}) => {
  return (
    <div className="about-area ptb-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="about-image" data-tilt>
              <img
                src={imageUrl}
                alt="image"
                data-aos="fade-down"
                data-aos-delay="80"
                data-aos-duration="800"
                data-aos-once="true"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div
              className="about-content"
              data-aos="fade-up"
              data-aos-delay="80"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <h3>Acerca de nuestro combo</h3>
              <Box
                fontWeight={"bold"}
                mb={3}
                fontSize={"2xl"}
                color="blackColor"
              >
                Precio : ${price}
              </Box>
              <ReactMarkdown>{servicesDetailsText}</ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesDetailsContent;
