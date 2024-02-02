import CTO from "@/components/Common/CTO";
import FaqContent from "@/components/FAQ/FaqContent";
import Footer from "@/components/Layout/Footer";
import NavbarThree from "@/components/Layout/NavbarThree";
import Link from "next/link";

export default function Faq() {
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
            <h2>Faq</h2>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>Faq</li>
            </ul>
          </div>
        </div>
      </div>

      <FaqContent />

      <CTO />

      <Footer />
    </>
  );
}
