import Link from "next/link";

const topServices = [
  {
    title: "Laser Hair Removal",
    href: "/services/laser-hair-removal",
    image: "/images/laser-service.jpg",
    description:
      "Elite MPX packages for smoother skin with better long-term value.",
    price: "From $279",
    detail: "8 sessions",
  },
  {
    title: "SculpSure",
    href: "/services/sculpsure-body-contouring-treatments/",
    image: "/images/sculpsure-service.jpg",
    description:
      "Targeted body sculpting packages with optional lymphatic bundles.",
    price: "From $900",
    detail: "3 sessions",
  },
  {
    title: "Facials",
    href: "/services/facials",
    image: "/images/facial-service.jpg",
    description:
      "Advanced glow, acne, IPL, hydrafacial, and laser facial treatments.",
    price: "From $75",
    detail: "single session",
  },
];

const TopServices = () => {
  return (
    <>
      <div className="features-area pb-75">
        <div className="container">
          <div className="features-inner-box">
            <div className="row justify-content-center">
              {topServices.map((service, index) => (
                <div
                  className="col-lg-4 col-sm-6"
                  data-aos={index === 1 ? "fade-up" : "fade-down"}
                  data-aos-delay="100"
                  data-aos-duration="1000"
                  data-aos-once="true"
                  key={service.title}
                >
                  <div className="single-features-card" data-tilt>
                    <div className="features-image" data-tilt>
                      <Link href={service.href}>
                        <img src={service.image} alt={service.title} />
                      </Link>
                    </div>
                    <div className="content">
                      <div className="feature-price-tag">
                        <span>{service.price}</span>
                        <small>{service.detail}</small>
                      </div>
                      <h3>
                        <Link href={service.href}>{service.title}</Link>
                      </h3>
                      <p>{service.description}</p>
                    </div>
                    <div className="hover-content">
                      <div className="feature-price-tag hover-price-tag">
                        <span>{service.price}</span>
                        <small>{service.detail}</small>
                      </div>
                      <h3>
                        <Link href={service.href}>{service.title}</Link>
                      </h3>
                      <Link href={service.href} className="features-btn">
                        View Pricing
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          .feature-price-tag {
            align-items: baseline;
            display: flex;
            gap: 8px;
            margin-bottom: 14px;
          }

          .feature-price-tag span {
            color: #b78452;
            font-size: 26px;
            font-weight: 800;
            line-height: 1;
          }

          .feature-price-tag small {
            color: #6e6880;
            font-size: 12px;
            letter-spacing: 0.08em;
            text-transform: uppercase;
          }

          .hover-price-tag span,
          .hover-price-tag small {
            color: #ffffff;
          }
        `}</style>
      </div>
    </>
  );
};

export default TopServices;
