import CTO from "@/components/Common/CTO";
import ContactForm from "@/components/Common/ContactForm";
import Footer from "@/components/Layout/Footer";
import NavbarThree from "@/components/Layout/NavbarThree";
import ServiceSlider from "@/components/Services/ServiceSlider";
import EyebrowThreadingContent from "@/components/Services/services-details/EyebroContent";
import Link from "next/link";

export default function ServiceDetails() {
  return (
    <>
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
            <h2>Botox and Fillers Services</h2>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a>Services</a>
                </Link>
              </li>
              <li>Botox and Fillers</li>
            </ul>
          </div>
        </div>
      </div>

      <EyebrowThreadingContent />

      <ContactForm />

      <div className="radius-0">
        <ServiceSlider />
      </div>

      <CTO />

      <Footer />
    </>
  );
}
