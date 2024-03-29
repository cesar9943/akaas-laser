/* eslint-disable @next/next/no-img-element */

const MainBanner = () => {
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
                  Personalized Care Meets Advanced Beauty
                </span>
                <h1
                  data-aos="fade-right"
                  data-aos-delay="70"
                  data-aos-duration="700"
                  data-aos-once="true"
                >
                  Radiate Beauty with AKAAS
                </h1>
                <p
                  data-aos="fade-right"
                  data-aos-delay="70"
                  data-aos-duration="700"
                  data-aos-once="true"
                >
                  Discover the essence of beauty at AKAAS Laser MedSpa. Our
                  Orlando-based center specializes in advanced aesthetic
                  treatments tailored to your unique needs. From laser hair
                  removal to rejuvenating facials, our expert team ensures a
                  luxurious experience that enhances your natural beauty and
                  confidence.
                </p>

                <div
                  className="banner-btn"
                  data-aos="fade-right"
                  data-aos-delay="70"
                  data-aos-duration="700"
                  data-aos-once="true"
                >
                  <a
                    href="https://squareup.com/appointments/book/k4rk6vt3qij078/L8GRWK7WDVDT7/start"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button
                      className="default-btn"
                      style={{
                        border: "none",
                      }}
                    >
                      Begin Your Beauty Journey
                    </button>
                  </a>
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
      </div>
    </>
  );
};

export default MainBanner;
