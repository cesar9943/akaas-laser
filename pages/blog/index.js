import BlogGrid from "@/components/Blog/BlogGrid";
import Footer from "@/components/Layout/Footer";
import NavbarThree from "@/components/Layout/NavbarThree";
import Link from "next/link";

export default function Blog() {
  return (
    <>
      <NavbarThree />
      <div
        className="page-banner-area mt-94"
        style={{ backgroundImage: `url(/images/page-banner/banner-bg.jpg)` }}
      >
        <div className="container">
          <div
            className="page-banner-content"
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-once="true"
          >
            <h2>Blog</h2>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>Blog</li>
            </ul>
          </div>
        </div>
      </div>
      <BlogGrid />
      <Footer />
    </>
  );
}
