import CTO from "@/components/Common/CTO";
import ContactForm from "@/components/Common/ContactForm";
import Footer from "@/components/Layout/Footer";
import NavbarTwo from "@/components/Layout/NavbarTwo";
import Link from "next/link";

export default function Contact() {
  return (
    <>
      <NavbarTwo />

      <div
        className="page-banner-area mt-94"
        style={{ backgroundImage: `url(/images/page-banner/banner-bg-5.jpg` }}
      >
        <div className="container">
          <div
            className="page-banner-content"
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-once="true"
          >
            <h2>Contactar</h2>
            <ul>
              <li>
                <Link href="/">
                  <a>Inicio</a>
                </Link>
              </li>
              <li>Contactar</li>
            </ul>
          </div>
        </div>
      </div>

      <CTO />

      <ContactForm />

      <Footer />
    </>
  );
}
