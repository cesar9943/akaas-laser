import Image from "next/image";

const MicrobladingEyelashExtensionsContent = () => {
  return (
    <>
      <div className="services-details-area ptb-100">
        <div className="container">
          <div className="services-details-desc">
            <div className="article-services-image">
              <img
                src="/images/services-details/microblanding-1.jpeg"
                alt="Microblading & Eyelash Extensions"
              />
            </div>
            <div className="article-services-content">
              <h3>Enhancing Beauty with Microblading & Eyelash Extensions</h3>
              <p>
                Discover the secret to fuller brows and captivating lashes with
                our Microblading and Eyelash Extensions services. Microblading
                provides a semi-permanent, tattoo-like enhancement for thin or
                uneven eyebrows, using fine needles to create natural-looking
                hair strokes. Eyelash extensions add length, volume, and allure
                to your natural lashes, adhering fibers with semi-permanent glue
                for a stunning, eye-defining effect.
              </p>
              <p>
                These non-invasive, non-surgical treatments offer comfortable
                experiences with lasting results, boosting your confidence and
                reducing your daily makeup routine. Ideal for anyone seeking to
                enhance their natural beauty effortlessly.
              </p>

              <h4>Benefits of Microblading & Eyelash Extensions</h4>
              <ul>
                <li>Comfortable and quick treatments with lasting results.</li>
                <li>Non-invasive and non-surgical, with minimal downtime.</li>
                <li>Boosts confidence by enhancing your natural allure.</li>
                <li>Affordable solutions to cosmetic concerns.</li>
              </ul>

              <h4>Who Is a Good Candidate?</h4>
              <p>
                These treatments are perfect for anyone with thin eyebrows or
                eyelashes, those looking to wear less makeup, or individuals
                experiencing alopecia or hair loss. Our experts at ALo Medical
                will assess your needs and recommend the best option for you.
              </p>

              <p>
                Embrace the beauty of simplicity and elegance with our
                Microblading & Eyelash Extensions services. Experience the joy
                of waking up with perfect brows and lashes every day. Visit us
                at ALo Medical for a consultation and transform your look today.
              </p>
            </div>
            <div className="article-services-middle-image">
              <Image
                src="/images/services-details/microblanding-2.jpg"
                alt="Before and After Microblading & Eyelash Extensions"
                width={447}
                height={243}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MicrobladingEyelashExtensionsContent;
