import CTO from "@/components/Common/CTO";
import ContactForm from "@/components/Common/ContactForm";
import SeoHead from "@/components/Common/SeoHead";
import Footer from "@/components/Layout/Footer";
import NavbarThree from "@/components/Layout/NavbarThree";
import ServiceSlider from "@/components/Services/ServiceSlider";
import ServicesDetailsContent from "@/components/Services/ServicesDetailsContent";
import Link from "next/link";

export default function ServiceDetails() {
  return (
    <>
      <SeoHead
        title="Aesthetic treatments in Orlando | Service details"
        description="Discover how AKAAS Laser MedSpa in Orlando customizes laser hair removal, body contouring, facials, and more with a bilingual medical team."
        canonical="/services/service-details"
        keywords="med spa Orlando, aesthetic services Orlando, medical spa Orlando"
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
            <h2>Services Details</h2>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>Services Details</li>
            </ul>
          </div>
        </div>
      </div>
      <ServicesDetailsContent />
      <ContactForm />
      <div className="radius-0">
        <ServiceSlider />
      </div>
      <CTO />
      <Footer />
    </>
  );
}
