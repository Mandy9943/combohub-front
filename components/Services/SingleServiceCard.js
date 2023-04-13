import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import BuyButton from "../BuyButton/BuyButton";

const SingleServiceCard = ({ service }) => {
  return (
    <Box className="services-item" shadow={"md"}>
      <div className="services-image">
        <Link href={`/services/${service.attributes.slug}`}>
          <a>
            <Image
              layout="responsive"
              width={service.attributes.image.data.attributes.width}
              height={service.attributes.image.data.attributes.height}
              src={service.attributes.image.data.attributes.url}
              alt={service.attributes.image.data.attributes.alternativeText}
            />
          </a>
        </Link>
      </div>
      <div className="services-content">
        <Flex justifyContent={"space-between"}>
          <h3>
            <Link href={`/services/${service.attributes.slug}`}>
              <a>{service.attributes.title}</a>
            </Link>
          </h3>

          <Box color="main" fontWeight={"bold"}>
            {" "}
            ${service.attributes.price}{" "}
          </Box>
        </Flex>

        <p>{service.attributes.shortText}</p>
        <Flex flexDir={"column"} mt="5">
          <BuyButton combo={service} />
          <Link href={`/services/${service.attributes.slug}`}>
            <a className="services-btn">{service.attributes.btnText}</a>
          </Link>
        </Flex>
      </div>
    </Box>
  );
};

export default SingleServiceCard;
