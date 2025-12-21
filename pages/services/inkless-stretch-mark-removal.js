import CTO from "@/components/Common/CTO";
import ContactForm from "@/components/Common/ContactForm";
import SeoHead from "@/components/Common/SeoHead";
import Footer from "@/components/Layout/Footer";
import NavbarThree from "@/components/Layout/NavbarThree";
import ServiceSlider from "@/components/Services/ServiceSlider";
import StretchMarkRemovalContent from "@/components/Services/services-details/InklessDetalContent";
import Link from "next/link";

export default function ServiceDetails() {
  return (
    <>
      <SeoHead
        title="Inkless stretch mark treatment in Orlando"
        description="Reduce the appearance of stretch marks with the inkless method in Orlando. No pigment, improves tone and texture near UCF."
        canonical="/services/inkless-stretch-mark-removal"
        keywords="stretch marks Orlando, inkless stretch mark removal Orlando, stretch mark camouflage Orlando"
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
            <h2>Inkless Stretch Removal</h2>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>Inkless Stretch Mark Removal Camouflage Treatment</li>
            </ul>
          </div>
        </div>
      </div>
      <StretchMarkRemovalContent />
      <ContactForm />
      <div className="radius-0">
        <ServiceSlider />
      </div>
      <CTO />
      <Footer />
    </>
  );
}
