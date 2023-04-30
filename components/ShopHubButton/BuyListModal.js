import { createShopHubOrder } from "@/utils/api";
import {
  Box,
  Center,
  Divider,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Grid,
  Icon,
  IconButton,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { BsPlusLg } from "react-icons/bs";
import { HiMinus } from "react-icons/hi";
import * as Yup from "yup";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const validationShema = Yup.object().shape({
  clientName: Yup.string().required("El nombre es requerido"),
  clientPhone: Yup.number().required("El número de teléfono es requerido"),
  productsList: Yup.array().of(
    Yup.object().shape({
      link: Yup.string().required("El link es requerido"),
      size: Yup.string(),
      color: Yup.string(),
      name: Yup.string().required("El nombre es requerido"),
    })
  ),
});

const BuyListModal = ({ isOpen, onClose }) => {
  const formik = useFormik({
    initialValues: {
      clientName: "",
      clientPhone: "",
      productsList: [
        {
          link: "",
          size: "",
          color: "",
          name: "",
        },
      ],
    },
    validationSchema: validationShema,
    onSubmit: (values) => {
      console.log("submit");
      try {
        createShopHubOrder(
          values.clientName,
          values.clientPhone,
          values.productsList
        );

        MySwal.fire({
          position: "top-end",
          icon: "success",
          title: "Hemos recibido su orden",
          showConfirmButton: false,
          timer: 1500,
        });
      } catch (error) {
        MySwal.fire({
          position: "top-end",
          icon: "error",
          title: `Error ${JSON.stringify(error)}`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
      onClose();
    },
  });

  const handleAddProduct = () => {
    formik.setFieldValue("productsList", [
      ...formik.values.productsList,
      { link: "", size: "", color: "", name: "" },
    ]);
  };
  const handleRemoveProduct = () => {
    //remove formik product
    if (formik.values.productsList.length > 1) {
      formik.setFieldValue("productsList", [
        ...formik.values.productsList.slice(0, -1),
      ]);
    }
  };

  return (
    <Modal onClose={onClose} isOpen={isOpen} bg="red" size={"2xl"}>
      <ModalOverlay background={"rgba(0,0,0,0.7)"} />
      <ModalContent background={"white"} borderRadius="15px" width={"90%"}>
        <ModalCloseButton />
        <form onSubmit={formik.handleSubmit}>
          <ModalHeader>
            <h2>Datos de la compra</h2>
          </ModalHeader>
          <ModalBody>
            <Text>Solo un unos pasos mas para completar su orden </Text>

            <Grid templateColumns={"1fr 1fr"} gap={"15px"} mb={6}>
              <FormControl
                isInvalid={
                  formik.touched.clientName && Boolean(formik.errors.clientName)
                }
                isRequired
              >
                <FormLabel> Nombre</FormLabel>
                <Input
                  type="text"
                  onChange={formik.handleChange}
                  name={`clientName`}
                />
                {formik.touched.clientName &&
                  Boolean(formik.errors.clientName) && (
                    <FormErrorMessage>
                      {formik.errors.clientName}.
                    </FormErrorMessage>
                  )}
              </FormControl>
              <FormControl
                isInvalid={
                  formik.touched.clientPhone &&
                  Boolean(formik.errors.clientPhone)
                }
                isRequired
              >
                <FormLabel>Número de teléfono</FormLabel>
                <Input
                  type="text"
                  onChange={formik.handleChange}
                  name={`clientPhone`}
                />
                {formik.touched.clientPhone &&
                  Boolean(formik.errors.clientPhone) && (
                    <FormErrorMessage>
                      {formik.errors.clientPhone}.
                    </FormErrorMessage>
                  )}
              </FormControl>
            </Grid>

            {formik.values.productsList.map((product, index) => {
              return (
                <Box key={index}>
                  <Text fontWeight={"bold"}>Articulo {index + 1}</Text>
                  <Grid
                    templateColumns={{ xs: "1fr", tablet: "1fr 1fr" }}
                    gap="15px"
                  >
                    <FormControl
                      isInvalid={
                        formik.touched.link && Boolean(formik.errors.link)
                      }
                      isRequired
                    >
                      <FormLabel>Link</FormLabel>
                      <Input
                        type="text"
                        onChange={formik.handleChange}
                        name={`productsList[${index}].link`}
                      />
                      {formik.touched.link && Boolean(formik.errors.link) && (
                        <FormErrorMessage>
                          {formik.errors.link}.
                        </FormErrorMessage>
                      )}
                    </FormControl>
                    <FormControl
                      isInvalid={
                        formik.touched.name && Boolean(formik.errors.name)
                      }
                      isRequired
                    >
                      <FormLabel>Name</FormLabel>
                      <Input
                        type="text"
                        onChange={formik.handleChange}
                        name={`productsList[${index}].name`}
                      />
                      {formik.touched.name && Boolean(formik.errors.name) && (
                        <FormErrorMessage>
                          {formik.errors.name}.
                        </FormErrorMessage>
                      )}
                    </FormControl>
                    <FormControl
                      isInvalid={
                        formik.touched.size && Boolean(formik.errors.size)
                      }
                    >
                      <FormLabel>Talla</FormLabel>
                      <Input
                        type="text"
                        onChange={formik.handleChange}
                        name={`productsList${index}.size`}
                      />
                      {formik.touched.size && Boolean(formik.errors.size) && (
                        <FormErrorMessage>
                          {formik.errors.size}.
                        </FormErrorMessage>
                      )}
                    </FormControl>
                    <FormControl
                      isInvalid={
                        formik.touched.color && Boolean(formik.errors.color)
                      }
                    >
                      <FormLabel>Color</FormLabel>
                      <Input
                        type="text"
                        onChange={formik.handleChange}
                        name={`productsList${index}.color`}
                      />
                      {formik.touched.color && Boolean(formik.errors.color) && (
                        <FormErrorMessage>
                          {formik.errors.color}.
                        </FormErrorMessage>
                      )}
                    </FormControl>
                  </Grid>
                  <Divider borderColor={"blackAlpha.300"} />
                </Box>
              );
            })}

            <Center gap={6}>
              <IconButton onClick={handleRemoveProduct}>
                <Icon as={HiMinus} />
              </IconButton>
              <IconButton onClick={handleAddProduct}>
                <Icon as={BsPlusLg} />
              </IconButton>
            </Center>
          </ModalBody>
          <ModalFooter>
            <button className="default-btn" type="submit">
              Enviar
            </button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default BuyListModal;
