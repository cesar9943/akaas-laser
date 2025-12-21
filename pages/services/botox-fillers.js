import CTO from "@/components/Common/CTO";
import ContactForm from "@/components/Common/ContactForm";
import SeoHead from "@/components/Common/SeoHead";
import Footer from "@/components/Layout/Footer";
import NavbarThree from "@/components/Layout/NavbarThree";
import ServiceSlider from "@/components/Services/ServiceSlider";
import BotoxFillersContent from "@/components/Services/services-details/BotoxDetailsContent";
import Link from "next/link";

export default function ServiceDetails() {
  return (
    <>
      <SeoHead
        title="Botox and Fillers in Orlando | Natural rejuvenation"
        description="Botox and dermal fillers in Orlando to soften lines and restore volume with medical specialists. Natural-looking results near UCF."
        canonical="/services/botox-fillers"
        keywords="Botox Orlando, fillers Orlando, hyaluronic acid Orlando, facial rejuvenation Orlando"
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
            <h2>Botox and Fillers Services</h2>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>Botox and Fillers</li>
            </ul>
          </div>
        </div>
      </div>
      <BotoxFillersContent />
      <ContactForm />
      <div className="radius-0">
        <ServiceSlider />
      </div>
      <CTO />
      <Footer />
    </>
  );
}
