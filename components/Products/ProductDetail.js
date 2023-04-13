import { Badge, Box, Flex, Icon, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import BuyButton from "../BuyButton/BuyButton";

const ProductDetail = ({ product }) => {
  const [currentImage, setCurrentImage] = useState(
    product.attributes.images.data[0].attributes.url
  );
  const textColor = "gray.400";
  return (
    <Box className=" with-radius ptb-100" bg="blackColor">
      <div className="container">
        <Box>
          <Flex
            direction={{ sm: "column", lg: "row" }}
            mb={{ sm: "42px", lg: "84px" }}
          >
            <Flex
              direction="column"
              me={{ lg: "70px", xl: "120px" }}
              mb={{ sm: "24px", lg: "0px" }}
            >
              <Box
                w={{ sm: "275px", md: "670px", lg: "450px", xl: "600px" }}
                h={{ sm: "200px", md: "500px", lg: "330px", xl: "500px" }}
                mb="26px"
                mx={{ sm: "auto", lg: "0px" }}
                overflow={"hidden"}
                rounded={"15px"}
              >
                <Box borderRadius="15px" overflow={"hidden"} w="full">
                  <Image
                    layout="responsive"
                    alt={product.attributes.title}
                    src={currentImage}
                    width={500}
                    height={500}
                  />
                </Box>
              </Box>
              <Stack
                direction="row"
                spacing={{ sm: "20px", md: "35px", lg: "20px" }}
                mx="auto"
                mb={{ sm: "24px", lg: "0px" }}
              >
                {product.attributes.images.data.map((image) => (
                  <Box
                    key={image.attributes.url}
                    w={{ sm: "36px", md: "90px", lg: "60px" }}
                    h={{ sm: "36px", md: "90px", lg: "60px" }}
                  >
                    <Box
                      borderRadius="15px"
                      cursor="pointer"
                      overflow={"hidden"}
                    >
                      <Image
                        src={image.attributes.url}
                        alt="Preview Imaage"
                        width={500}
                        height={500}
                        layout="responsive"
                        onClick={(e) => setCurrentImage(image.attributes.url)}
                      />
                    </Box>
                  </Box>
                ))}
              </Stack>
            </Flex>
            <Flex direction="column">
              <Text color={"white"} fontSize="3xl" fontWeight="bold" mb="12px">
                {product.attributes.title}
              </Text>
              <Stack
                direction="row"
                spacing="12px"
                color="orange.300"
                mb="30px"
              >
                <Icon as={BsStarFill} color="#FFB547" w="26px" h="26px" />
                <Icon as={BsStarFill} color="#FFB547" w="26px" h="26px" />
                <Icon as={BsStarFill} color="#FFB547" w="26px" h="26px" />
                <Icon as={BsStarFill} color="#FFB547" w="26px" h="26px" />
                <Icon as={BsStarHalf} w="26px" h="26px" />
              </Stack>
              <Text color="gray.400" fontWeight="500" fontSize="md" mb={0}>
                {product.attributes.onlyCombo ? "Precio estimado" : "Precio"}
              </Text>
              <Text color={"white"} fontWeight="bold" fontSize="3xl" mb="12px">
                ${product.attributes.estimatedPrice}
              </Text>
              <Badge
                color="#01B574"
                bg="#C9FBD5"
                w="95px"
                h="28px"
                borderRadius="8px"
                display="flex"
                alignItems="center"
                alignSelf={{ sm: "center", md: "auto" }}
                justifyContent="center"
                mb="40px"
              >
                Disponible
              </Badge>
              <Text color="white" fontSize="sm" fontWeight="500" mb="8px">
                Descripción
              </Text>

              <Box
                mb={6}
                sx={{
                  p: {
                    color: textColor,
                  },
                }}
              >
                <ReactMarkdown>{product.attributes.description}</ReactMarkdown>
              </Box>
              {!product.attributes.onlyCombo && (
                <Box>
                  <BuyButton product={product} />
                </Box>
              )}
            </Flex>
          </Flex>
        </Box>
      </div>
    </Box>
  );
};

export default ProductDetail;
