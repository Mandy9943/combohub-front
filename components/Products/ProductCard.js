import { parseImagesUrls } from "@/utils/urls";
import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({
  attributes: {
    title,
    slug,
    estimatedPrice,
    images: { data: imagesData },
  },
}) => {
  return (
    <Link href={`/products/${slug}`} passHref>
      <Flex
        bg="white"
        w="full"
        flexDir={"column"}
        rounded={"md"}
        _hover={{
          shadow: "md",
        }}
        as="a"
      >
        <Box m="10px" borderRadius={"md"} overflow={"hidden"}>
          <Image
            width={"500px"}
            height={"500px"}
            src={parseImagesUrls(imagesData[0].attributes.url)}
            alt="product"
          />
        </Box>
        <Flex p="10px" flexDir="column" flex={1}>
          <Text fontWeight={"semibold"} flex={1}>
            {title}
          </Text>
          <Box>
            <Text color="danger">Precio estimado : ${estimatedPrice}</Text>
          </Box>
        </Flex>
      </Flex>
    </Link>
  );
};

export default ProductCard;
