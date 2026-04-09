import CTO from "@/components/Common/CTO";
import ContactForm from "@/components/Common/ContactForm";
import SeoHead from "@/components/Common/SeoHead";
import Footer from "@/components/Layout/Footer";
import NavbarThree from "@/components/Layout/NavbarThree";
import ServiceSlider from "@/components/Services/ServiceSlider";
import BodyContouringDetailsContent from "@/components/Services/services-details/BodyContouringDetailsContent";
import Link from "next/link";

export default function ServiceDetails() {
  return (
    <>
      <SeoHead
        title="Body Contouring Treatments in Orlando | Sculpt and tone"
        description="Non-invasive body contouring in Orlando with radiofrequency, lymphatic massage, pressotherapy, and glute sculpting packages near UCF."
        canonical="/services/body-contouring-sculpting-treatments"
        keywords="body contouring Orlando, skin tightening Orlando, pressotherapy Orlando, glute sculpting Orlando"
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
            <h2>Body Contouring Treatments</h2>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>Body Contouring Treatments</li>
            </ul>
          </div>
        </div>
      </div>
      <BodyContouringDetailsContent />
      <ContactForm />
      <div className="radius-0">
        <ServiceSlider />
      </div>
      <CTO />
      <Footer />
    </>
  );
}
