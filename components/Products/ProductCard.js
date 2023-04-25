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
          shadow: "2xl",
        }}
        as="a"
        shadow={"xl"}
      >
        <Box m="10px" borderRadius={"md"} overflow={"hidden"}>
          <Box w="full" height={"200"} position={"relative"}>
            <Image
              width={400}
              height={300}
              src={parseImagesUrls(imagesData[0].attributes.url)}
              alt="product"
              layout="fill"
              objectFit="cover"
            />
          </Box>
        </Box>
        <Flex p="10px" flexDir="column" flex={1}>
          <Text fontWeight={"semibold"} flex={1} color="black" fontSize={"md"}>
            {title.split(" ").slice(0, 3).join(" ")}
          </Text>
          <Box>
            <Text color="blackColor" fontWeight={"bold"}>
              {" "}
              ≈ ${estimatedPrice}
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Link>
  );
};

export default ProductCard;
