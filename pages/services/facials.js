import CTO from "@/components/Common/CTO";
import ContactForm from "@/components/Common/ContactForm";
import SeoHead from "@/components/Common/SeoHead";
import Footer from "@/components/Layout/Footer";
import NavbarThree from "@/components/Layout/NavbarThree";
import ServiceSlider from "@/components/Services/ServiceSlider";
import FacialsDetailsContent from "@/components/Services/services-details/FacialsDetailsContent";
import Link from "next/link";

export default function ServiceDetails() {
  return (
    <>
      <SeoHead
        title="Facials in Orlando | Deep cleansing and glow"
        description="Personalized facials in Orlando for deep hydration, glowing skin, and acne control. Licensed estheticians near UCF and Oviedo."
        canonical="/services/facials"
        keywords="facials Orlando, hydrating facial Orlando, deep cleansing facial Orlando, facial spa Orlando"
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
            <h2>Facials Services</h2>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>Facials</li>
            </ul>
          </div>
        </div>
      </div>
      <FacialsDetailsContent />
      <ContactForm />
      <div className="radius-0">
        <ServiceSlider />
      </div>
      <CTO />
      <Footer />
    </>
  );
}
