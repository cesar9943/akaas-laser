import ContactForm from "@/components/Common/ContactForm";
import SeoHead from "@/components/Common/SeoHead";
import Footer from "@/components/Layout/Footer";
import NavbarThree from "@/components/Layout/NavbarThree";
import AllServicesCard from "@/components/Services/AllServicesCard";
import Link from "next/link";

export default function Services() {
  return (
    <>
      <SeoHead
        title="Med Spa Services in Orlando | AKAAS Laser MedSpa"
        description="Explore all aesthetic services from AKAAS Laser MedSpa in Orlando: laser hair removal, facials, body contouring, massages, and more near UCF and Oviedo."
        canonical="/services"
        keywords="med spa services Orlando, aesthetic treatments Orlando, laser hair removal Orlando, facials Orlando"
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
            <h2>Services</h2>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>Services</li>
            </ul>
          </div>
        </div>
      </div>
      {/* <KeyFeatures /> */}
      <AllServicesCard />
      <ContactForm />
      <Footer />
    </>
  );
}
