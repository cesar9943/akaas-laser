const SculpSureDetailContent = () => {
  return (
    <>
      <div className="services-details-area ptb-100">
        <div className="container">
          <div className="services-details-desc">
            <div className="article-services-image"></div>
            <div className="article-services-content">
              <h3>SculpSure® Non-Invasive Body Contouring</h3>
              <p>
                The SculpSure device provides treatments for non-invasive body
                contouring that permanently reduces stubborn fat without surgery
                or downtime.
              </p>

              {/* SculpSure Body Contouring Treatments */}
              <h4>SculpSure Body Contouring Treatments</h4>
              <p>
                Safely and effectively eliminate unwanted fat cells in just 25
                minutes per treatment with our revolutionary SculpSure
                technology. Now you can provide patients with non-invasive body
                contouring that permanently reduces stubborn fat without surgery
                or downtime.
              </p>
              <p>
                SculpSure is the world’s first FDA-cleared laser device for
                non-invasive lipolysis of the abdomen, flanks, back, inner
                thighs, outer thighs, and submental area.
              </p>

              {/* SculpSure Submental Treatment */}
              <h4>SculpSure Submental Treatment</h4>
              <p>
                Our Submental applicator design is perfect for providing precise
                and effective treatments resulting in a slimmer appearance under
                the chin. The addition of the submental application makes the
                SculpSure device an all-encompassing, non-invasive body
                contouring system.
              </p>
              <ul>
                <li>100% patient satisfaction rating in clinical study1</li>
                <li>FDA-cleared for individuals with a BMI up to 49</li>
              </ul>

              {/* How SculpSure works */}
              <h4>How SculpSure works</h4>
              <p>
                The 1060nm wavelength’s specific affinity for adipose tissue,
                coupled with minimal absorption in the dermis, allows SculpSure
                to efficiently treat areas of troublesome fat in just 25 minutes
                per treatment. Over time, the body naturally eliminates the
                disrupted fat cells with results seen as quickly as 6 weeks and
                optimal results usually seen in as few as 12 weeks.
              </p>
              <ul>
                <li>
                  Minimal absorption in the dermis leaves the skin’s surface
                  unharmed
                </li>
                <li>Advanced Contact Cooling™ enhances patient comfort</li>
                <li>
                  Feathering of heat spread provides natural-looking results
                </li>
                <li>Mild and transient side effects</li>
              </ul>

              {/* Maximum results. Maximize success. */}
              <h4>Maximum results. Maximize success.</h4>
              <p>
                Fast, 25-minute treatment per area. Versatile applicators to fit
                a variety of body shapes and sizes.
              </p>
              <div className="d-flex flex-column gap-3">
                <div className="row ">
                  <div className="col-lg-6">
                    {/*eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/services-details/sculpsure-1.jpg"
                      alt="SculpSure Image"
                    />
                  </div>
                  <div className="col-lg-6">
                    {/*eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/services-details/sculpsure-3.jpg"
                      alt="SculpSure Image"
                    />
                  </div>
                </div>

                <div className="row ">
                  <div className="col-lg-6">
                    {/*eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/services-details/sculpsure-2.jpg"
                      alt="SculpSure Image"
                    />
                  </div>
                  <div className="col-lg-6">
                    {/*eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/services-details/sculpsure-4.png"
                      alt="SculpSure Image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SculpSureDetailContent;
