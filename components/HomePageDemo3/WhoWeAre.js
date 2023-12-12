import Link from "next/link";

const WhoWeAre = () => {
  return (
    <>
      <div className="about-area pb-75">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-wrap-image">
                <img
                  src="/images/about/about-3.jpg"
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
                className="about-wrap-content"
                data-aos="fade-up"
                data-aos-delay="80"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <div className="about-bg-text">ABOUT US</div>
                <span>WHO WE ARE</span>

                <h3> Our philosophy </h3>
                <p>
                  At Akaas Laser MedSpa, our philosophy isn't just about
                  transforming appearances; it's about fostering confidence,
                  inspiring self-love, and nurturing a sense of empowerment. We
                  are committed to helping you embrace your beauty in its purest
                  form, enabling you to shine from within.
                </p>
              </div>
            </div>
          </div>

          <div className="about-inner-box">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6">
                <div
                  className="single-about-card"
                  data-aos="fade-up"
                  data-aos-delay="80"
                  data-aos-duration="800"
                  data-aos-once="true"
                >
                  <h3>Our Vision</h3>
                  <p>
                    At Akaas Laser MedSpa, our story is woven with a dedication
                    to redefining beauty and well-being. Founded on the belief
                    that everyone deserves to feel confident and comfortable in
                    their skin, our journey began with a vision to merge
                    advanced technology with personalized care. With a history
                    rooted in expertise and innovation, our team of skilled
                    professionals continually strives to exceed expectations by
                    blending artistry with science. At Akaas Laser MedSpa, our
                    vision transcends skincare; it encompasses a transformative
                    experience that inspires confidence, radiance, and a renewed
                    sense of self in every individual we serve.
                  </p>

                  <div className="about-btn">
                    <Link href="/about">
                      <a className="default-btn">Know More About Us</a>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div
                  className="single-about-card"
                  data-aos="fade-down"
                  data-aos-delay="70"
                  data-aos-duration="700"
                  data-aos-once="true"
                >
                  <h3>Our Mission</h3>
                  <p>
                    Our mission is simple yet profound: to empower individuals
                    on their path to self-assurance. Through our commitment to
                    excellence, safety, and unwavering client focus, we've
                    cultivated a nurturing environment where each treatment
                    embodies our core philosophy of enhancing natural beauty.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div
                  className="single-about-card"
                  data-aos="fade-up"
                  data-aos-delay="80"
                  data-aos-duration="800"
                  data-aos-once="true"
                >
                  <div className="card-image">
                    <img src="/images/about/about-4.jpg" alt="image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about-circle-shape">
          <img src="/images/about/about-circle.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default WhoWeAre;
