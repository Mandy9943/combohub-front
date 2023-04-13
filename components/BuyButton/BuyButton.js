import { sendEmailJs } from "@/utils/email";
import {
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Grid,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Text,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationShema = Yup.object().shape({
  name: Yup.string().required("El nombre es requerido"),
  contactMethod: Yup.string().required("El metodo de contacto es requerido"),
  contactInfo: Yup.string().required("La información de contacto es requerida"),
  province: Yup.string().required("La provincia es requerida"),
  municipality: Yup.string().required("El municipio es requerido"),
  comment: Yup.string(),
});

const BuyButton = ({ product, combo }) => {
  const isCombo = combo ? true : false;
  const { onClose, onOpen, isOpen } = useDisclosure();
  const formik = useFormik({
    initialValues: {
      name: "",
      contactMethod: "whatsapp",
      contactInfo: "",
      province: "",
      municipality: "",
      comment: "",
    },
    validationSchema: validationShema,
    onSubmit: (values) => {
      console.log(values);
      sendEmailJs(values, isCombo ? combo : product, isCombo);
    },
  });

  const sellTypeText = isCombo
    ? `Combo ${combo.attributes.title}`
    : `${product.attributes.title}`;
  return (
    <>
      <button className="default-btn" onClick={onOpen}>
        Comprar
      </button>
      <Modal onClose={onClose} isOpen={isOpen} bg="red" size={"xl"}>
        <ModalOverlay background={"rgba(0,0,0,0.7)"} />
        <ModalContent background={"white"} borderRadius="15px" width={"90%"}>
          <ModalCloseButton />
          <form onSubmit={formik.handleSubmit}>
            <ModalHeader>
              <h2>Datos de la compra</h2>
            </ModalHeader>
            <ModalBody>
              <Text>
                Solo un unos pasos mas para completar su orden{" "}
                <b> {sellTypeText}</b>
              </Text>
              <Grid
                templateColumns={{ xs: "1fr", tablet: "1fr 1fr" }}
                gap="15px"
              >
                <FormControl
                  isInvalid={formik.touched.name && Boolean(formik.errors.name)}
                  isRequired
                >
                  <FormLabel>Nombre</FormLabel>
                  <Input
                    type="text"
                    onChange={formik.handleChange}
                    name="name"
                  />
                  {formik.touched.name && Boolean(formik.errors.name) && (
                    <FormErrorMessage>{formik.errors.name}.</FormErrorMessage>
                  )}
                </FormControl>
                <Box></Box>
                <FormControl
                  isInvalid={
                    formik.touched.contactMethod &&
                    Boolean(formik.errors.contactMethod)
                  }
                  isRequired
                >
                  <FormLabel>Método de contacto</FormLabel>
                  <Select onChange={formik.handleChange} name="contactMethod">
                    <option value={"whatsapp"}>Whatsapp</option>
                    <option value={"telegram"}>Telegram</option>
                    <option value={"correo"}>Correo</option>
                  </Select>
                  {formik.touched.contactMethod &&
                    Boolean(formik.errors.contactMethod) && (
                      <FormErrorMessage>
                        {formik.errors.contactMethod}.
                      </FormErrorMessage>
                    )}
                </FormControl>
                <FormControl
                  isInvalid={
                    formik.touched.contactInfo &&
                    Boolean(formik.errors.contactInfo)
                  }
                  isRequired
                >
                  <FormLabel>Número, correo o usuario</FormLabel>
                  <Input
                    type="text"
                    onChange={formik.handleChange}
                    name="contactInfo"
                  />
                  {formik.touched.name &&
                    Boolean(formik.errors.contactInfo) && (
                      <FormErrorMessage>
                        {formik.errors.contactInfo}.
                      </FormErrorMessage>
                    )}
                </FormControl>
                <FormControl
                  isInvalid={
                    formik.touched.province && Boolean(formik.errors.province)
                  }
                  isRequired
                >
                  <FormLabel>Provincia</FormLabel>
                  <Input
                    type="text"
                    onChange={formik.handleChange}
                    name="province"
                  />
                  {formik.touched.name && Boolean(formik.errors.province) && (
                    <FormErrorMessage>
                      {formik.errors.province}.
                    </FormErrorMessage>
                  )}
                </FormControl>
                <FormControl
                  isInvalid={
                    formik.touched.municipality &&
                    Boolean(formik.errors.municipality)
                  }
                  isRequired
                >
                  <FormLabel>Municipio</FormLabel>
                  <Input
                    type="text"
                    onChange={formik.handleChange}
                    name="municipality"
                  />
                  {formik.touched.name &&
                    Boolean(formik.errors.municipality) && (
                      <FormErrorMessage>
                        {formik.errors.municipality}.
                      </FormErrorMessage>
                    )}
                </FormControl>
                <FormControl
                  isInvalid={
                    formik.touched.comment && Boolean(formik.errors.comment)
                  }
                  gridColumn={"1/-1"}
                >
                  <FormLabel>Comentario adicional</FormLabel>
                  <Textarea onChange={formik.handleChange} name="comment" />
                  {formik.touched.name && Boolean(formik.errors.comment) && (
                    <FormErrorMessage>
                      {formik.errors.comment}.
                    </FormErrorMessage>
                  )}
                </FormControl>
              </Grid>
            </ModalBody>
            <ModalFooter>
              <button className="default-btn" type="submit">
                Enviar
              </button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};

export default BuyButton;
