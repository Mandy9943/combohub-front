import baseUrl from "@/utils/baseUrl";
import Head from "next/head";

const Metas = ({ title, description, image }) => {
  // Default meta tags
  const defaultTitle = "ComboHub: Combos de moda y estilo";
  const defaultDescription =
    "ComboHub es tu plataforma para comprar combos exclusivos de moda y estilo. Explora nuestra selección de productos y encuentra el combo perfecto para ti.";
  const defaultImage = "https://combohub.website/images/logo.png";

  // Meta tags
  const metaTitle = title ? title : defaultTitle;
  const metaDescription = description ? description : defaultDescription;
  const metaImage = image ? image : defaultImage;

  const canonicalURL = baseUrl + useRouter().asPath;

  return (
    <Head>
      <title key="titleTag">{metaTitle}</title>
      <meta
        key={"viewport"}
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
      <meta key="utf-8" charSet="utf-8" />
      <meta key={"description"} name="description" content={metaDescription} />
      <meta
        key="keywords"
        name="keywords"
        content="combos, moda, estilo, ropa, zapatos, accesorios, tendencias, ComboHub"
      />
      <meta key="author" name="author" content="ComboHub" />
      <meta key="og:title" property="og:title" content={metaTitle} />
      <meta
        key="og:description"
        property="og:description"
        content={metaDescription}
      />
      <meta key="og:website" property="og:type" content="website" />
      <meta key="og:url" property="og:url" content={canonicalURL} />
      <meta key="og:image" property="og:image" content={metaImage} />
      <meta key="og:site_name" property="og:site_name" content="ComboHub" />
      <meta key="twitter:title" name="twitter:title" content={metaTitle} />
      <meta
        key="twitter:description"
        name="twitter:description"
        content={metaDescription}
      />
      <meta key="twitter:image" name="twitter:image" content={metaImage} />
      <meta
        key="twitter:card"
        name="twitter:card"
        content="summary_large_image"
      />
      <meta key="twitter:site" name="twitter:site" content="@ComboHub" />
      <link key="canonical" rel="canonical" href={canonicalURL} />
    </Head>
  );
};

export default Metas;
