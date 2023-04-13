import CTO from "@/components/Common/CTO";
import ContactForm from "@/components/Common/ContactForm";
import Footer from "@/components/Layout/Footer";
import NavbarTwo from "@/components/Layout/NavbarTwo";
import ProductDetail from "@/components/Products/ProductDetail";
import ServiceSlider from "@/components/Services/ServiceSlider";
import { fetcher } from "@/utils/api";
import Link from "next/link";

const Product = ({ product: { data } }) => {
  const product = data[0];
  console.log("product", product);

  //   const [currentImage, setCurrentImage] = useState(
  //     product.attributes.images.data[0].attributes.url
  //   );
  //   const textColor = "gray.400";
  return (
    <>
      <NavbarTwo />

      <div
        className="page-banner-area mt-94"
        style={{ backgroundImage: `url(/images/page-banner/banner-bg-4.jpg` }}
      >
        <div className="container">
          <div
            className="page-banner-content"
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-once="true"
          >
            <h2>{data[0].attributes.title}</h2>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>{data[0].attributes.title}</li>
            </ul>
          </div>
        </div>
      </div>

      <ProductDetail product={product} />
      <CTO />
      <div className="radius-0">
        <ServiceSlider />
      </div>

      <ContactForm />

      <Footer />
    </>
  );
};

export async function getStaticPaths() {
  const { data } = await fetcher("api/products");
  const paths = data.map((service) => ({
    params: { slug: service.attributes.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // console.log(params);
  // Call an external API endpoint to get products.
  // You can use any data fetching library
  const res = await fetcher(
    `/api/products?filters[slug][$eq]=${params.slug}&populate=*`
  );

  const product = await res;
  // By returning { props: { service } }, the Blog component
  // will receive `service` as a prop at build time

  console.log("product", product);

  return {
    props: {
      product,
    },
  };
}

export default Product;
