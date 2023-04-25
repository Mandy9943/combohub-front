import CTO from "@/components/Common/CTO";
import ContactForm from "@/components/Common/ContactForm";
import Footer from "@/components/Layout/Footer";
import NavbarTwo from "@/components/Layout/NavbarTwo";
import Metas from "@/components/Metas/Metas";
import ServiceSlider from "@/components/Services/ServiceSlider";
import ServicesDetailsContent from "@/components/Services/ServicesDetailsContent";
import ServicesProducts from "@/components/Services/ServicesProducts";
import baseApiUrl from "@/utils/baseApiUrl";
import Link from "next/link";

const ServicesDetails = ({ service: { data } }) => {
  return (
    <>
      <NavbarTwo />
      <Metas
        description={data[0].attributes.shortText.slice(0, 149)}
        title={"Combo " + data[0].attributes.title}
        image={data[0].attributes.image.data.attributes.url}
      />
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

      <ServicesDetailsContent {...data[0]} combo={data[0]} />

      <ServicesProducts {...data[0]} />

      <div className="radius-0">
        <ServiceSlider />
      </div>
      <CTO />
      <ContactForm />

      <Footer />
    </>
  );
};

export async function getStaticPaths() {
  const res = await fetch(`${baseApiUrl}/api/services`);
  const { data } = await res.json();
  // console.log(data);
  const paths = data.map((service) => ({
    params: { slug: service.attributes.slug },
  }));

  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  // console.log(params);
  // Call an external API endpoint to get products.
  // You can use any data fetching library
  const res = await fetch(
    `${baseApiUrl}/api/services?filters[slug][$eq]=${params.slug}&populate=*`
  );
  const service = await res.json();
  console.log("service", service);
  // By returning { props: { service } }, the Blog component
  // will receive `service` as a prop at build time

  return {
    props: {
      service,
    },
    revalidate: 30,
  };
}

export default ServicesDetails;
