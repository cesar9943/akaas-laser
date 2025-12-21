import CTO from "@/components/Common/CTO";
import ContactForm from "@/components/Common/ContactForm";
import SeoHead from "@/components/Common/SeoHead";
import Footer from "@/components/Layout/Footer";
import NavbarThree from "@/components/Layout/NavbarThree";
import ServiceSlider from "@/components/Services/ServiceSlider";
import CryolipolysisDetailsContent from "@/components/Services/services-details/CryolipolysisDetailsContent";
import Link from "next/link";

export default function ServiceDetails() {
  return (
    <>
      <SeoHead
        title="Cryolipolysis in Orlando | Fat reduction by cooling"
        description="Reduce localized fat with cryolipolysis in Orlando. Suction and flat-plate options ideal for abdomen, flanks, and thighs near UCF."
        canonical="/services/cryolipolysis-fat-reduction"
        keywords="cryolipolysis Orlando, coolsculpting Orlando, fat reduction Orlando, fat freeze Orlando"
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
            <h2>Cryolipolysis Fat Reduction</h2>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>Cryolipolysis Fat Reduction</li>
            </ul>
          </div>
        </div>
      </div>
      <CryolipolysisDetailsContent />
      <ContactForm />
      <div className="radius-0">
        <ServiceSlider />
      </div>
      <CTO />
      <Footer />
    </>
  );
}
