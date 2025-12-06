const WhoWeAre = () => {
  return (
    <>
      <div className="about-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-image" data-tilt>
                <img
                  src="/images/about/about-2.png"
                  alt="image"
                  data-aos="fade-down"
                  data-aos-delay="80"
                  data-aos-duration="800"
                  data-aos-once="true"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div
                className="about-content"
                data-aos="fade-up"
                data-aos-delay="80"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <span>WHO WE ARE</span>
                <h3>
                  Your Premier Destination for Aesthetic Excellence in Orlando
                </h3>
                <p>
                  We are Akaas Laser Medspa, specialists in advanced aesthetic
                  treatments in Orlando. Since our inception, we have helped
                  thousands of clients achieve their beauty goals. We specialize
                  in Laser Hair Removal, Body Contouring, and Skin Rejuvenation
                  using state-of-the-art technology.
                </p>
                <p>
                  We work with individuals who seek effective, non-invasive
                  solutions for their skin and body concerns. Our typical
                  clients are those looking for permanent hair reduction,
                  anti-aging treatments, and overall wellness, valuing safety
                  and results above all.
                </p>

                <div className="about-features">
                  <ul>
                    <li>
                      <i className="ri-check-double-line"></i>
                      State-of-the-art Elite MPX Laser Technology
                    </li>
                    <li>
                      <i className="ri-check-double-line"></i>
                      Highly trained and certified specialists
                    </li>
                    <li>
                      <i className="ri-check-double-line"></i>
                      Personalized care with proven results
                    </li>
                  </ul>
                </div>

                <p>
                  <strong>Success Stories:</strong>
                  <br />• <strong>Laser Hair Removal:</strong> Clients achieve
                  up to 90% permanent hair reduction after a full course of
                  treatment.
                  <br />• <strong>Body Contouring:</strong> Visible fat
                  reduction in treated areas with our non-invasive SculpSure
                  technology.
                  <br />• <strong>Skin Rejuvenation:</strong> Significant
                  improvement in skin texture and tone reported by 95% of our
                  facial clients.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="about-shape-1">
          <img src="/images/about/about-shape.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default WhoWeAre;
