import CTO from "@/components/Common/CTO";
import ContactForm from "@/components/Common/ContactForm";
import SeoHead from "@/components/Common/SeoHead";
import Footer from "@/components/Layout/Footer";
import NavbarThree from "@/components/Layout/NavbarThree";
import ServiceSlider from "@/components/Services/ServiceSlider";
import SculpSureDetailContent from "@/components/Services/services-details/SculpSureDetailContent";
import Link from "next/link";

export default function ServiceDetails() {
  return (
    <>
      <SeoHead
        title="SculpSure in Orlando | Non-surgical fat reduction"
        description="Sculpt abdomen, flanks, and thighs with 25-minute SculpSure sessions in Orlando. FDA-cleared, non-invasive body contouring near UCF."
        canonical="/services/sculpsure-body-contouring-treatments"
        keywords="SculpSure Orlando, body contouring Orlando, fat reduction Orlando, body sculpting Orlando"
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
            <h2>SculpSure Services</h2>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>SculpSure</li>
            </ul>
          </div>
        </div>
      </div>
      <SculpSureDetailContent />
      <ContactForm />
      <div className="radius-0">
        <ServiceSlider />
      </div>
      <CTO />
      <Footer />
    </>
  );
}
