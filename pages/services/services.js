import CTO from "@/components/Common/CTO";
import ContactForm from "@/components/Common/ContactForm";
import KeyFeatures from "@/components/Common/KeyFeatures";
import Footer from "@/components/Layout/Footer";
import NavbarTwo from "@/components/Layout/NavbarTwo";
import AllServicesCard from "@/components/Services/AllServicesCard";
import Link from "next/link";

export default function Services() {
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
            <h2>Combos</h2>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>Combos</li>
            </ul>
          </div>
        </div>
      </div>
      <AllServicesCard />

      <KeyFeatures />
      <CTO />
      <ContactForm />

      <Footer />
    </>
  );
}
