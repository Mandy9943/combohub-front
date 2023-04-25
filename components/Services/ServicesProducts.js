import { fetcher } from "@/utils/api";
import { Box, Center, Flex, Grid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import useSwr from "swr";
import ProductCard from "../Products/ProductCard";

function getQueryStringArr(products) {
  return products.data.map(
    (product, i) => `filters[id][$in][${i}]=${product.id}`
  );
}

const ServicesProducts = ({
  attributes: { title, slug, multiple, products },
}) => {
  const productIds = getQueryStringArr(products);
  const idsQueryString = productIds.join("&");
  const [tags, setTags] = useState([]);
  const [filterdProducts, setFilterdProducts] = useState([]);

  // fetch products from strapi-api wich service is certain id
  const { data } = useSwr(
    products && products.data?.length > 0
      ? `/api/products?${idsQueryString}&populate=*`
      : null,
    fetcher,
    {
      fallbackData: {
        data: [],
      },
    }
  );
  useEffect(() => {
    if (data.data.length > 0) {
      const tagAttributes = data.data.flatMap((product) => {
        return product.attributes.tags;
      });
      const tagsData = tagAttributes.flatMap((tag) => tag.data);
      const allTags = tagsData.map((tag) => tag.attributes.name);
      const tags = [...new Set(allTags)];
      setTags(tags);
    }
  }, [data]);
  useEffect(() => {
    if (data.data.length > 0) {
      setFilterdProducts(data.data);
    }
  }, [data]);

  const handleClickedTag = (tag) => {
    const filteredProducts = data.data.filter((product) => {
      const productTags = product.attributes.tags.data.flatMap(
        (tag) => tag.attributes.name
      );
      return productTags.includes(tag);
    });
    setFilterdProducts(filteredProducts);
  };

  const handleClear = () => {
    setFilterdProducts(data.data);
  };
  return (
    <div className="container ">
      <Grid
        templateColumns={{ xs: "1fr", md: "240px auto" }}
        gap="30px"
        mb={20}
      >
        <Box p="20px" bg="white" height={"400px"} rounded={"md"} shadow={"lg"}>
          <ProductTags
            tags={tags}
            onClick={handleClickedTag}
            onClear={handleClear}
          />
        </Box>
        <Box className="about-content">
          <Box as="h3">
            Productos de <b>{title}</b>
          </Box>
          <Grid
            templateColumns={{ xs: "1fr", lg: "1fr 1fr 1fr 1fr" }}
            gap="24px"
          >
            {filterdProducts.map((product) => {
              console.log("product", product);
              let cantOnCombo = 1;
              if (
                multiple &&
                typeof multiple === "object" &&
                multiple.length > 0
              ) {
                cantOnCombo = multiple.find(
                  (productM) => productM?.product === product.id
                )?.count;
              }
              if (typeof cantOnCombo !== "number") {
                cantOnCombo = 1;
              }
              return (
                <ProductCard
                  key={product.id}
                  attributes={product.attributes}
                  cantOnCombo={cantOnCombo}
                />
              );
            })}
          </Grid>
        </Box>
      </Grid>
    </div>
  );
};

export default ServicesProducts;

const ProductTags = ({ tags, onClick, onClear }) => {
  return (
    <Flex w="full" flexDir={"column"} gap="12px" h="full">
      <Flex w="full" flexDir={"column"} flex={1} h="full" gap="12px">
        {tags.map((tag) => {
          return (
            <Flex
              key={tag}
              alignItems={"center"}
              bg="#F6F9FC"
              px="16px"
              py="12px"
              fontWeight={"semibold"}
              fontSize={"lg"}
              rounded={"md"}
              cursor={"pointer"}
              _hover={{
                shadow: "sm",
                transform: "scale(1.05)",
              }}
              onClick={() => onClick(tag)}
            >
              {tag}
            </Flex>
          );
        })}
      </Flex>
      <Center
        bg="#F6F9FC"
        px="16px"
        py="12px"
        fontWeight={"bold"}
        onClick={onClear}
        cursor={"pointer"}
        _hover={{
          shadow: "sm",
          transform: "scale(1.05)",
        }}
      >
        Ver todos
      </Center>
    </Flex>
  );
};
