import CTO from "@/components/Common/CTO";
import ContactForm from "@/components/Common/ContactForm";
import SeoHead from "@/components/Common/SeoHead";
import Footer from "@/components/Layout/Footer";
import NavbarThree from "@/components/Layout/NavbarThree";
import ServiceSlider from "@/components/Services/ServiceSlider";
import IntimateWhiteningDetailsContent from "@/components/Services/services-details/IntimateWhiteningDetailsContent";
import Link from "next/link";

export default function ServiceDetails() {
  return (
    <>
      <SeoHead
        title="Intimate & Sensitive Area Whitening in Orlando"
        description="Safe intimate and sensitive area whitening in Orlando for underarms, areolas, and more. IPL and PromoiItalia options with package pricing."
        canonical="/services/intimate-sensitive-area-whitening"
        keywords="intimate whitening Orlando, underarm whitening Orlando, pigmentation treatment Orlando, sensitive area whitening"
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
            <h2>Intimate & Sensitive Area Whitening</h2>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>Intimate & Sensitive Area Whitening</li>
            </ul>
          </div>
        </div>
      </div>
      <IntimateWhiteningDetailsContent />
      <ContactForm />
      <div className="radius-0">
        <ServiceSlider />
      </div>
      <CTO />
      <Footer />
    </>
  );
}
