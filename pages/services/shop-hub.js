import ContactForm from "@/components/Common/ContactForm";
import WorkingProcess from "@/components/Common/WorkingProcess";
import Footer from "@/components/Layout/Footer";
import NavbarTwo from "@/components/Layout/NavbarTwo";
import PricingTable from "@/components/Pricing/PricingTable";
import Link from "next/link";

export default function ShopHub() {
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
            <h2>Compras personalizadas</h2>
            <ul>
              <li>
                <Link href="/">
                  <a>Inicio</a>
                </Link>
              </li>
              <li>Compras personalizadas</li>
            </ul>
          </div>
        </div>
      </div>

      <PricingTable />
      <WorkingProcess />
      <ContactForm />

      <Footer />
    </>
  );
}
