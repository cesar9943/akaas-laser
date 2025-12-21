import CTO from "@/components/Common/CTO";
import ContactForm from "@/components/Common/ContactForm";
import SeoHead from "@/components/Common/SeoHead";
import Footer from "@/components/Layout/Footer";
import NavbarThree from "@/components/Layout/NavbarThree";
import ServiceSlider from "@/components/Services/ServiceSlider";
import MassageDetailsContent from "@/components/Services/services-details/MassageDetailsContent";
import Link from "next/link";

export default function ServiceDetails() {
  return (
    <>
      <SeoHead
        title="Massages in Orlando | Relaxation and lymphatic drainage"
        description="Therapeutic massage and post-op lymphatic drainage in Orlando to relieve tension and improve circulation. Professional care near UCF."
        canonical="/services/massages"
        keywords="massages Orlando, lymphatic drainage Orlando, therapeutic massage Orlando, spa Orlando"
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
            <h2>Massages Services</h2>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>Massages</li>
            </ul>
          </div>
        </div>
      </div>
      <MassageDetailsContent />
      <ContactForm />
      <div className="radius-0">
        <ServiceSlider />
      </div>
      <CTO />
      <Footer />
    </>
  );
}
