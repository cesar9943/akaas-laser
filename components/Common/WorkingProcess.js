const WorkingProcess = () => {
  return (
    <>
      <div className="choose-area pt-100 pb-75">
        <div className="container">
          <div className="section-title section-style-two">
            <div className="section-bg-text">PROCESS</div>
            <span>OUR PROCESS</span>
            <h2>Experience Our Seamless Four-Step Journey</h2>
            <p>
              At AKAAS Laser MedSpa, we have crafted a meticulous process to
              ensure your journey with us is smooth and effective.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-3 col-sm-6">
              <div
                className="single-choose-card"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="500"
                data-aos-once="true"
              >
                <div className="choose-image">
                  <div
                    style={{
                      backgroundImage: `url(/images/consulation.jpg)`,
                      backgroundRepeat: `no-repeat`,
                      backgroundPosition: `center center`,
                      backgroundSize: `cover`,
                      width: 140,
                      height: 150,
                      borderRadius: "10px",
                    }}
                  ></div>
                  <div className="number">1</div>
                </div>
                <div className="choose-content">
                  <h3>Consultation</h3>
                  <p>
                    Begin your journey with a personalized consultation where we
                    discuss your unique needs and goals.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div
                className="single-choose-card"
                data-aos="fade-up"
                data-aos-delay="60"
                data-aos-duration="600"
                data-aos-once="true"
              >
                <div className="choose-image">
                  <div
                    style={{
                      backgroundImage: `url(/images/evolution.jpg)`,
                      backgroundRepeat: `no-repeat`,
                      backgroundPosition: `center center`,
                      backgroundSize: `cover`,
                      width: 140,
                      height: 150,
                      borderRadius: "10px",
                    }}
                  ></div>
                  <div className="number">2</div>
                </div>
                <div className="choose-content">
                  <h3>Treatment & Evaluation</h3>
                  <p>
                    Experience cutting-edge treatments tailored to your needs,
                    followed by a comprehensive evaluation for effectiveness.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div
                className="single-choose-card"
                data-aos="fade-up"
                data-aos-delay="70"
                data-aos-duration="700"
                data-aos-once="true"
              >
                <div className="choose-image">
                  <div
                    style={{
                      backgroundImage: `url(/images/creative.jpg)`,
                      backgroundRepeat: `no-repeat`,
                      backgroundPosition: `center center`,
                      backgroundSize: `cover`,
                      width: 140,
                      height: 150,
                      borderRadius: "10px",
                    }}
                  ></div>
                  <div className="number">3</div>
                </div>
                <div className="choose-content">
                  <h3>Creative Solutions</h3>
                  <p>
                    Collaborate on creative solutions as we explore innovative
                    ideas and concepts to enhance your aesthetic journey.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div
                className="single-choose-card"
                data-aos="fade-up"
                data-aos-delay="80"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <div className="choose-image">
                  <div
                    style={{
                      backgroundImage: `url(/images/precision.jpg)`,
                      backgroundRepeat: `no-repeat`,
                      backgroundPosition: `center center`,
                      backgroundSize: `cover`,
                      width: 140,
                      height: 150,
                      borderRadius: "10px",
                    }}
                  ></div>
                  <div className="number">4</div>
                </div>
                <div className="choose-content">
                  <h3>Precision & Results</h3>
                  <p>
                    Our skilled team executes treatments with precision,
                    ensuring optimal results, and assists in the seamless
                    installation of your enhanced self.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkingProcess;
