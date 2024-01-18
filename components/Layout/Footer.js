import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="footer-area with-black-background pt-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-6">
              <div
                className="single-footer-widget"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="500"
                data-aos-once="true"
              >
                <div className="widget-logo">
                  <Link href="/">
                    <a>
                      <Image
                        src="/images/black-logo.png"
                        alt="image"
                        width={180}
                        height={180}
                      />
                    </a>
                  </Link>
                </div>
                <p>Follow us to get the latest updates about our services.</p>

                <ul className="widget-social">
                  <li>
                    <a
                      href="https://www.facebook.com/laserhairremovalalafaya/?show_switched_toast=0&show_invite_to_follow=0&show_switched_tooltip=0&show_podcast_settings=0&show_community_review_changes=0&show_community_rollback=0&show_follower_visibility_disclosure=0"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="ri-facebook-fill"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/akaasmedspa/?show_switched_toast=0&show_invite_to_follow=0&show_switched_tooltip=0&show_podcast_settings=0&show_community_review_changes=0&show_community_rollback=0&show_follower_visibility_disclosure=0"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="ri-facebook-fill"></i>
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.instagram.com/akaaslaser"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="ri-instagram-line"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div
                className="single-footer-widget ps-5"
                data-aos="fade-up"
                data-aos-delay="60"
                data-aos-duration="600"
                data-aos-once="true"
              >
                <h3>Links</h3>

                <ul className="quick-links">
                  <li>
                    <Link href="/pricing">
                      <a>Pricing</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services">
                      <a>Services</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div
                className="single-footer-widget ps-5"
                data-aos="fade-up"
                data-aos-delay="70"
                data-aos-duration="700"
                data-aos-once="true"
              >
                <h3>Pages</h3>

                <ul className="quick-links">
                  <li>
                    <Link href="/contact">
                      <a>Contact Us</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq">
                      <a>FAQ</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms-of-service">
                      <a>Terms of Service</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy">
                      <a>Privacy Policy</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div
                className="single-footer-widget"
                data-aos="fade-up"
                data-aos-delay="80"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <h3>Subscribe Newsletter</h3>

                <form className="newsletter-form">
                  <input
                    type="email"
                    className="input-newsletter"
                    placeholder="Enter your email"
                    name="EMAIL"
                    required
                  />

                  <button type="submit" className="default-btn">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright-area">
          <div className="container">
            <div className="copyright-area-content">
              <p>&copy; Akaas Laser. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
