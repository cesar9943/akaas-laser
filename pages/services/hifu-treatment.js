import CTO from "@/components/Common/CTO";
import ContactForm from "@/components/Common/ContactForm";
import Footer from "@/components/Layout/Footer";
import NavbarThree from "@/components/Layout/NavbarThree";
import ServiceSlider from "@/components/Services/ServiceSlider";
import HIFUServiceContent from "@/components/Services/services-details/HifuContent";
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
            <h2>HIFU Services</h2>
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
              <li>HIFU Non-Surgical Facelift</li>
            </ul>
          </div>
        </div>
      </div>

      <HIFUServiceContent />

      <ContactForm />

      <div className="radius-0">
        <ServiceSlider />
      </div>

      <CTO />

      <Footer />
    </>
  );
}
