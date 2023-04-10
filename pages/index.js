import Article from "@/components/Common/Article";
import Partners from "@/components/Common/Partners";
import Testimonials from "@/components/Common/Testimonials";
import WhyChooseUs from "@/components/Common/WhyChooseUs";
import HeroSlider from "@/components/HomePageDemo1/HeroSlider";
import WhoWeAre from "@/components/HomePageDemo1/WhoWeAre";
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import ServiceSlider from "@/components/Services/ServiceSlider";

export default function Home() {
  return (
    <>
      <Navbar />

      <HeroSlider />

      <Partners />

      <WhoWeAre />

      <ServiceSlider />

      <WhyChooseUs />

      <Testimonials />

      <Article />

      <div className="m-2 bor-radius-15">
        <Footer className="rounded-4" />
      </div>
    </>
  );
}
