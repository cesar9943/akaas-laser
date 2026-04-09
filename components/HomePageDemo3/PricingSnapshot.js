import Link from "next/link";

const featuredOffers = [
  {
    eyebrow: "Most booked",
    title: "Laser Hair Removal Packages",
    price: "From $279",
    detail: "8 sessions for small areas",
    points: [
      "Medium area package: $499",
      "Large area package: $699",
      "Promo: free small or medium area on select packages",
    ],
    href: "/services/laser-hair-removal",
  },
  {
    eyebrow: "Body sculpting",
    title: "SculpSure Packages",
    price: "From $900",
    detail: "3 sessions with up to 4 applicators",
    points: [
      "Medium package: $1,200",
      "Large package: $1,400",
      "Bundle with 15 lymphatic massages available",
    ],
    href: "/services/sculpsure-body-contouring-treatments",
  },
  {
    eyebrow: "Skin glow",
    title: "Advanced Facial Treatments",
    price: "From $75",
    detail: "Deep cleansing facial with microdermabrasion",
    points: [
      "Laser Genesis: $199",
      "Hydrafacial: $120",
      "Ultimate acne correction: $290",
    ],
    href: "/services/facials",
  },
  {
    eyebrow: "Injectables",
    title: "Botox Treatments",
    price: "$350",
    detail: "30 units",
    points: [
      "Additional units: $11 each",
      "Under 20 units: $13 each",
      "Forehead, frown lines, and crow's feet",
    ],
    href: "/services/botox-fillers",
  },
];

const PricingSnapshot = () => {
  return (
    <section className="pricing-snapshot-area pb-75">
      <div className="container">
        <div className="pricing-snapshot-shell">
          <div className="pricing-snapshot-header">
            <span>POPULAR PRICING</span>
            <h2>Start with the treatments people ask about first</h2>
            <p>
              The landing now shows real entry points, so visitors can qualify
              themselves faster before booking. These are teaser prices that
              lead into the full service pages.
            </p>
          </div>

          <div className="pricing-snapshot-grid">
            {featuredOffers.map((offer) => (
              <article className="pricing-card" key={offer.title}>
                <div className="pricing-card-top">
                  <span>{offer.eyebrow}</span>
                  <h3>{offer.title}</h3>
                </div>

                <div className="pricing-value-block">
                  <strong>{offer.price}</strong>
                  <p>{offer.detail}</p>
                </div>

                <ul>
                  {offer.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                <Link href={offer.href} className="pricing-link">
                  View full pricing
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .pricing-snapshot-shell {
          background:
            radial-gradient(
              circle at top left,
              rgba(208, 176, 134, 0.2),
              transparent 34%
            ),
            linear-gradient(
              135deg,
              #18062f 0%,
              #261041 54%,
              #f5efe7 54%,
              #f5efe7 100%
            );
          border-radius: 34px;
          overflow: hidden;
          padding: 42px;
          position: relative;
        }

        .pricing-snapshot-header {
          max-width: 620px;
          margin-bottom: 30px;
        }

        .pricing-snapshot-header span {
          color: #d9b488;
          display: inline-block;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.16em;
          margin-bottom: 12px;
        }

        .pricing-snapshot-header h2 {
          color: #ffffff;
          font-size: 42px;
          line-height: 1.12;
          margin-bottom: 14px;
          max-width: 14ch;
        }

        .pricing-snapshot-header p {
          color: rgba(255, 255, 255, 0.8);
          font-size: 16px;
          margin-bottom: 0;
          max-width: 56ch;
        }

        .pricing-snapshot-grid {
          display: grid;
          gap: 20px;
          grid-template-columns: repeat(4, minmax(0, 1fr));
        }

        .pricing-card {
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(20, 4, 44, 0.08);
          border-radius: 24px;
          box-shadow: 0 24px 60px rgba(20, 4, 44, 0.18);
          display: flex;
          flex-direction: column;
          min-height: 100%;
          padding: 24px;
        }

        .pricing-card-top span {
          color: #7f5c3f;
          display: inline-block;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          margin-bottom: 10px;
          text-transform: uppercase;
        }

        .pricing-card-top h3 {
          color: #14042c;
          font-size: 24px;
          line-height: 1.2;
          margin-bottom: 18px;
        }

        .pricing-value-block {
          border-bottom: 1px solid rgba(20, 4, 44, 0.08);
          margin-bottom: 18px;
          padding-bottom: 18px;
        }

        .pricing-value-block strong {
          color: #14042c;
          display: block;
          font-size: 38px;
          line-height: 1;
          margin-bottom: 8px;
        }

        .pricing-value-block p {
          color: #5f5971;
          margin-bottom: 0;
        }

        .pricing-card ul {
          display: grid;
          gap: 10px;
          list-style: none;
          margin: 0 0 22px;
          padding: 0;
        }

        .pricing-card li {
          color: #3d3651;
          font-size: 14px;
          line-height: 1.55;
          padding-left: 18px;
          position: relative;
        }

        .pricing-card li::before {
          background: #b78452;
          border-radius: 50%;
          content: "";
          height: 7px;
          left: 0;
          position: absolute;
          top: 8px;
          width: 7px;
        }

        .pricing-link {
          color: #14042c;
          font-size: 14px;
          font-weight: 700;
          margin-top: auto;
          text-transform: uppercase;
        }

        @media (max-width: 1199px) {
          .pricing-snapshot-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 767px) {
          .pricing-snapshot-shell {
            padding: 28px 20px;
          }

          .pricing-snapshot-header h2 {
            font-size: 32px;
          }

          .pricing-snapshot-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default PricingSnapshot;
