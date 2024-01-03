import CTO from "@/components/Common/CTO";
import ContactForm from "@/components/Common/ContactForm";
import GoogleMap from "@/components/Common/GoogleMap";
import Footer from "@/components/Layout/Footer";
import NavbarThree from "@/components/Layout/NavbarThree";
import Link from "next/link";

export default function Contact() {
  return (
    <>
      <NavbarThree />

      <div
        className="page-banner-area mt-94"
        style={{
          backgroundImage: `url(/images/page-banner/conrtact-banner.jpg`,
        }}
      >
        <div className="container">
          <div
            className="page-banner-content"
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-once="true"
          >
            <h2>Contact</h2>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>

      <CTO />

      <ContactForm />

      <GoogleMap />

      <Footer />
    </>
  );
}
