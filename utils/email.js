import emailjs from "emailjs-com";
import baseUrl from "./baseUrl";

export const sendEmailJs = async (data, product, isCombo) => {
  const emailParams = {
    product: isCombo ? "combo" : "product",
    name: data.name,

    contactMethod: data.contactMethod,
    contactInfo: data.contactInfo,
    province: data.province,
    municipality: data.municipality,
    comment: data.comment,

    productID: product.id,
    productTitle: product.attributes.title,
    priceTotal:
      "$" + isCombo
        ? product.attributes.price
        : product.attributes.estimatedPrice,
    link: `${baseUrl}/${isCombo ? "services" : "products"}/${
      product.attributes.slug
    }`,
  };

  try {
    const emailjsResponse = await emailjs.send(
      "service_y6kmkdb",
      "template_7dahbdp",
      emailParams,
      "fksy_lQlbbrGMKJa3"
    );
    console.log("success");
  } catch (error) {
    console.error("Error al enviar el correo electrónico", error);
  }
};
