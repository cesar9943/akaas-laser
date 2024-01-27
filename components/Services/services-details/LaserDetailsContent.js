import Image from "next/image";

const IVTherapyDetailsContent = () => {
  return (
    <>
      <div className="services-details-area ptb-100">
        <div className="container">
          <div className="services-details-desc">
            <div className="article-services-image">
              <img
                src="/images/services-details/iv-therapy-0.jpeg"
                alt="IV Nutritional Therapy"
              />
            </div>

            <div className="article-services-content">
              <h3>IV Nutritional Therapy</h3>
              <p>
                IV nutritional therapy, also known as intravenous therapy, IV
                nutrition, or IV nutrient therapy, is a therapy type renowned
                for its wide array of health benefits. These include anti-aging,
                immune system improvement, anxiety minimization, hangover
                symptom reversal, and more. This therapy is essential for
                individuals not receiving adequate nutrients for optimal body
                performance.
              </p>
              <p>
                Administered directly into the veins, IV therapy often yields
                quicker results than oral or traditional medicines. It is
                considered safe, effective, restorative, and customizable for
                each patient's unique needs.
              </p>

              <h4>Benefits of IV Nutritional Therapy:</h4>
              <ul>
                <li>Boosts energy and detoxifies the body.</li>
                <li>Enhances the immune system and helps prevent illness.</li>
                <li>Decreases artery plaque and combats chronic fatigue.</li>
                <li>
                  Improves hangovers and reverses symptoms of malnutrition.
                </li>
                <li>
                  Assists with age management and helps treat Parkinson's
                  disease.
                </li>
              </ul>

              <p>
                IV Hydration Therapy, part of IV Nutritional Therapy, is a
                low-risk, minimally invasive procedure performed by our licensed
                medical staff in a relaxing spa environment. This treatment
                delivers a mix of vitamins, minerals, and antioxidants directly
                into the bloodstream, bypassing the digestive system for maximum
                effectiveness.
              </p>

              <p>
                The Myers’ cocktail, including high doses of vitamins B and C,
                calcium, and magnesium, is a popular choice. This therapy can
                also be used for acute conditions like asthma and acute
                respiratory distress syndrome, as well as for supporting cancer
                treatments with high-dose vitamin C.
              </p>

              <h4>Weight Loss Injections:</h4>
              <p>
                In addition to traditional IV therapies, we offer weight loss
                injections like Semaglutide (Wegovy) and Zepbound (tirzepatide),
                approved by the FDA for chronic weight management. These
                injections are suitable for individuals meeting specific BMI and
                health condition criteria.
              </p>

              {/* Additional information or sections can be added here... */}
            </div>

            <div className="row">
              {/* Images and other media related to the service */}
              <div className="col-lg-6 col-sm-6">
                <div className="article-services-middle-image">
                  <Image
                    src="/images/services-details/iv-therapy-1.jpeg"
                    alt="IV Therapy Session"
                    width={568}
                    height={296}
                  />
                </div>
              </div>
              <div className="col-lg-6 col-sm-6">
                <div className="article-services-middle-image">
                  <Image
                    src="/images/services-details/iv-therapy-2.jpeg"
                    alt="IV Nutrients"
                    width={800}
                    height={600}
                  />
                </div>
              </div>
            </div>

            {/* More content can be added here... */}
          </div>
        </div>
      </div>
    </>
  );
};

export default IVTherapyDetailsContent;
