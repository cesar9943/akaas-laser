import CTO from "@/components/Common/CTO";
import ContactForm from "@/components/Common/ContactForm";
import SeoHead from "@/components/Common/SeoHead";
import Footer from "@/components/Layout/Footer";
import NavbarThree from "@/components/Layout/NavbarThree";
import ServiceSlider from "@/components/Services/ServiceSlider";
import Morpheus8Content from "@/components/Services/services-details/Morpheus8DetailsContent";
import Link from "next/link";

export default function ServiceDetails() {
  return (
    <>
      <SeoHead
        title="Morpheus8 in Orlando | Fractional RF microneedling"
        description="Morpheus8 in Orlando to improve laxity, fine lines, and scars with microneedling plus RF. Advanced treatment near UCF."
        canonical="/services/morpheus8-treatment"
        keywords="Morpheus8 Orlando, fractional RF Orlando, RF microneedling Orlando"
      />
      <NavbarThree />
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
            <h2>Morpheus8 Service</h2>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>Morpheus8 Skin Rejuvenation</li>
            </ul>
          </div>
        </div>
      </div>
      <Morpheus8Content />
      <ContactForm />
      <div className="radius-0">
        <ServiceSlider />
      </div>
      <CTO />
      <Footer />
    </>
  );
}
