import Link from "next/link";

const pricingData = [
  {
    title: "Small Area",
    price: "$49 / month",
    description:
      "Choose one of the following: Upper Lip, Chin, Ears, Between Brows, Feet/toes, Fingers, Hands, Areola",
    features: [
      "Upper Lip",
      "Chin",
      "Ears",
      "Between Brows",
      "Feet/toes",
      "Fingers",
      "Hands",
      "Areola",
    ],
    mostPopular: true,
  },
  {
    title: "Medium Area",
    price: "$70 / 6 weeks",
    description:
      "Choose one of the following: Underarm, Bikini Line, Happy trail, Inner Thigh, Front or Back of Neck",
    features: [
      "Underarm",
      "Bikini Line",
      "Happy trail",
      "Inner Thigh",
      "Front or Back of Neck",
    ],
  },
  {
    title: "Large Area",
    price: "$99 / 6 weeks",
    description:
      "Choose one of the following: Full Brazilian (intimate area), Buttocks, Face, Chest, Abdomen, Lower back, Upper back",
    features: [
      "Full Brazilian (intimate area)",
      "Buttocks",
      "Face",
      "Chest",
      "Abdomen",
      "Lower back",
      "Upper back",
    ],
  },
  {
    title: "Extra Large Area",
    price: "$199 / 6 weeks",
    description:
      "Choose one of the following: Full Legs, Full Back, Chest & Abdomen, Full Arms",
    features: ["Full Legs", "Full Back", "Chest & Abdomen", "Full Arms"],
  },
];

const PricingTable = () => {
  return (
    <>
      <div className="pricing-area with-black-background pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <span>PRICING</span>
            <h2>
              Laser <b>Hair Removal</b> Services
            </h2>
            <p>
              Experience the future of hair removal with our Elite MPX Laser
              Service – tailored for all skin types, ensuring comfort with
              cutting-edge technology. Achieve superior results in fewer
              sessions, and enjoy a treatment that's as gentle as it is
              effective. Join the revolution in skincare today!
            </p>
          </div>

          <div className="row justify-content-center">
            {pricingData.map((item, index) => (
              <div className={`col-lg-12 col-md-6`} key={index}>
                <div
                  className="single-pricing-card"
                  data-aos="fade-up"
                  data-aos-delay={`${70 + index * 10}`}
                  data-aos-duration="1000"
                  data-aos-once="true"
                >
                  <h3>{item.title}</h3>
                  <div className="price">{item.price}</div>
                  <p>{item.description}</p>
                  <ul className="pricing-list">
                    {item.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>
                        <i className="ri-check-fill"></i> {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="pricing-btn">
                    <Link href="/contact">
                      <a className="default-btn">Choose Plan</a>
                    </Link>
                  </div>
                  {item.mostPopular && (
                    <div className="most-popular">
                      <span>Most Popular</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Shape Images */}
        <div className="pricing-bg-shape-1">
          <img src="/images/pricing/pricing-bg-shape.png" alt="image" />
        </div>
        <div className="pricing-shape-1">
          <img src="/images/pricing/pricing-shape-1.png" alt="image" />
        </div>
        <div className="pricing-shape-2">
          <img src="/images/pricing/pricing-shape-2.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default PricingTable;
