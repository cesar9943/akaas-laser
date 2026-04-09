/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const MainBanner = () => {
  const bookingUrl =
    "https://squareup.com/appointments/book/k4rk6vt3qij078/L8GRWK7WDVDT7/start";

  return (
    <>
      <div className="main-banner-area">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="main-banner-content">
                <span
                  data-aos="fade-right"
                  data-aos-delay="70"
                  data-aos-duration="700"
                  data-aos-once="true"
                >
                  Orlando medspa packages with transparent starting prices
                </span>
                <h1
                  data-aos="fade-right"
                  data-aos-delay="70"
                  data-aos-duration="700"
                  data-aos-once="true"
                >
                  Laser, facials, sculpting, and Botox that are easier to book
                </h1>
                <p
                  data-aos="fade-right"
                  data-aos-delay="70"
                  data-aos-duration="700"
                  data-aos-once="true"
                >
                  AKAAS Laser MedSpa combines advanced technology with
                  personalized care for clients who want visible results without
                  guessing what anything costs. Explore laser hair removal
                  packages, advanced facial treatments, body contouring, and
                  Botox with clear starting prices and customized plans.
                </p>

                <div
                  className="banner-offer-grid"
                  data-aos="fade-right"
                  data-aos-delay="90"
                  data-aos-duration="800"
                  data-aos-once="true"
                >
                  <div className="banner-offer-card">
                    <span>Laser Hair Removal</span>
                    <strong>From $279</strong>
                    <small>8-session package</small>
                  </div>
                  <div className="banner-offer-card">
                    <span>Facials</span>
                    <strong>From $75</strong>
                    <small>Deep cleansing facial</small>
                  </div>
                  <div className="banner-offer-card">
                    <span>SculpSure</span>
                    <strong>From $900</strong>
                    <small>3-session package</small>
                  </div>
                  <div className="banner-offer-card">
                    <span>Botox</span>
                    <strong>$350</strong>
                    <small>30 units</small>
                  </div>
                </div>

                <div
                  className="banner-btn"
                  data-aos="fade-right"
                  data-aos-delay="70"
                  data-aos-duration="700"
                  data-aos-once="true"
                >
                  <a href={bookingUrl} target="_blank" rel="noreferrer">
                    <button
                      className="default-btn"
                      style={{
                        border: "none",
                      }}
                    >
                      Book a Consultation
                    </button>
                  </a>
                  <Link
                    href="/services"
                    className="default-btn banner-secondary-btn"
                  >
                    View Services & Pricing
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="main-banner-image">
                <img
                  src="/images/main-banner/banner.png"
                  alt="image"
                  data-aos="fade-down"
                  data-aos-delay="70"
                  data-aos-duration="700"
                  data-aos-once="true"
                />

                <div className="banner-circle">
                  <img
                    src="/images/main-banner/banner-circle.png"
                    alt="image"
                    data-aos="fade-down"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                    data-aos-once="true"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="banner-shape-1">
          <img src="/images/main-banner/banner-shape-1.png" alt="image" />
        </div>
        <div className="banner-shape-2">
          <img src="/images/main-banner/banner-shape-2.png" alt="image" />
        </div>
        <div className="banner-dot-shape-1">
          <img src="/images/main-banner/dot-1.png" alt="image" />
        </div>
        <div className="banner-dot-shape-2">
          <img src="/images/main-banner/dot-2.png" alt="image" />
        </div>
        <div className="banner-dot-shape-3">
          <img src="/images/main-banner/dot-3.png" alt="image" />
        </div>
        <div className="banner-dot-shape-4">
          <img src="/images/main-banner/dot-4.png" alt="image" />
        </div>
        <div className="banner-dot-shape-5">
          <img src="/images/main-banner/dot-5.png" alt="image" />
        </div>
        <div className="lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>

        <style jsx>{`
          .banner-offer-grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;
            margin-top: 28px;
            max-width: 640px;
          }

          .banner-offer-card {
            background: linear-gradient(
              180deg,
              rgba(255, 255, 255, 0.95),
              rgba(244, 232, 216, 0.88)
            );
            border: 1px solid rgba(167, 123, 74, 0.22);
            border-radius: 20px;
            box-shadow: 0 20px 45px rgba(20, 4, 44, 0.12);
            display: flex;
            flex-direction: column;
            gap: 2px;
            padding: 16px 18px;
          }

          .banner-offer-card span {
            color: #7f5c3f;
            font-size: 12px;
            font-weight: 700;
            letter-spacing: 0.12em;
            text-transform: uppercase;
          }

          .banner-offer-card strong {
            color: #14042c;
            font-size: 28px;
            line-height: 1.1;
          }

          .banner-offer-card small {
            color: #5f5971;
            font-size: 13px;
          }

          .banner-btn {
            align-items: center;
            display: flex;
            flex-wrap: wrap;
            gap: 14px;
          }

          .banner-secondary-btn {
            background: transparent !important;
            border: 1px solid rgba(20, 4, 44, 0.18);
            box-shadow: none;
            color: #14042c !important;
          }

          @media (max-width: 767px) {
            .banner-offer-grid {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default MainBanner;
