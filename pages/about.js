import OurGoal from "@/components/About/OurGoal";
import WhoWeAre from "@/components/About/WhoWeAre";
import Article from "@/components/Common/Article";
import ContactForm from "@/components/Common/ContactForm";
import Partners from "@/components/Common/Partners";
import Skills from "@/components/Common/Skills";
import WhyChooseUs from "@/components/Common/WhyChooseUs";
import Footer from "@/components/Layout/Footer";
import NavbarThree from "@/components/Layout/NavbarThree";
import PricingTable from "@/components/Pricing/PricingTable";
import Link from "next/link";

export default function About() {
  return (
    <>
      <NavbarThree />

      <div
        className="page-banner-area mt-94"
        style={{ backgroundImage: `url(/images/page-banner/banner-bg.jpg` }}
      >
        <div className="container">
          <div
            className="page-banner-content"
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-once="true"
          >
            <h2>About Style One</h2>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>About Us</li>
            </ul>
          </div>
        </div>
      </div>

      <WhoWeAre />

      <Partners />

      <OurGoal />

      <div className="bg-with-F5F5F5-color">
        <WhyChooseUs />
      </div>

      <Skills />

      <PricingTable />

      <ContactForm />

      <Article />

      <Footer />
    </>
  );
}
