import CTO from "@/components/Common/CTO";
import ContactForm from "@/components/Common/ContactForm";
import SeoHead from "@/components/Common/SeoHead";
import Footer from "@/components/Layout/Footer";
import NavbarThree from "@/components/Layout/NavbarThree";
import ServiceSlider from "@/components/Services/ServiceSlider";
import HydraLipsDetailsContent from "@/components/Services/services-details/HydraLipsDetailsContent";
import Link from "next/link";

export default function HydraLipsMicroneedling() {
  return (
    <>
      <SeoHead
        title="Hydra Lips with microneedling in Orlando"
        description="Deep lip hydration with microneedling in Orlando for smoother texture and richer color. Non-invasive treatment near UCF."
        canonical="/services/hydra-lips-microneedling"
        keywords="Hydra Lips Orlando, lip microneedling Orlando, lip hydration Orlando"
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
            <h2>Hydra Lips with Microneedling</h2>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>Hydra Lips with Microneedling</li>
            </ul>
          </div>
        </div>
      </div>
      <HydraLipsDetailsContent />
      <ContactForm />
      <div className="radius-0">
        <ServiceSlider />
      </div>
      <CTO />
      <Footer />
    </>
  );
}
