import Image from "next/image";

const HydraLipsDetailsContent = () => {
  return (
    <>
      <div className="services-details-area ptb-100">
        <div className="container">
          <div className="services-details-desc">
            <div className="article-services-image">
              <Image
                src="/images/services-details/hydra-lips.jpg"
                alt="Hydra Lips with Microneedling"
                width={2048}
                height={1536}
              />
            </div>
            <div className="article-services-content">
              <h3>HYDRA LIPS WITH MICRONEEDLING</h3>
              <h4>Deep Hydration, Brightening & Lip Rejuvenation</h4>
              <p>
                Hydra Lips with Microneedling is an advanced, non-invasive lip
                rejuvenation treatment that combines deep hydration with the
                collagen-stimulating benefits of microneedling. This treatment
                smooths, revitalizes, and enhances the natural color and texture
                of the lips, giving them a healthier, fuller appearance.
              </p>
              <p>
                Unlike fillers, this procedure does not change the lip shape
                dramatically — instead, it focuses on restoring moisture,
                improving circulation, and boosting natural collagen for soft,
                youthful lips.
              </p>

              <h4>💧 How the Treatment Works</h4>
              <ul className="list">
                <li>
                  <i className="ri-checkbox-circle-line"></i> Cleansing & gentle
                  exfoliation to remove dry skin.
                </li>
                <li>
                  <i className="ri-checkbox-circle-line"></i> Application of
                  hydrating serums rich in hyaluronic acid or peptides.
                </li>
                <li>
                  <i className="ri-checkbox-circle-line"></i> Microneedling on
                  the lips and lip border using sterile, ultra-fine needles to
                  stimulate collagen, smooth lines, and improve serum
                  absorption.
                </li>
                <li>
                  <i className="ri-checkbox-circle-line"></i> Hydra Lips device
                  to enhance circulation and plumpness.
                </li>
                <li>
                  <i className="ri-checkbox-circle-line"></i> Nourishing lip
                  balm to lock in moisture and protect.
                </li>
              </ul>

              <h4>✨ Benefits</h4>
              <ul className="list">
                <li>
                  <i className="ri-checkbox-circle-line"></i> Deep hydration and
                  long-lasting softness
                </li>
                <li>
                  <i className="ri-checkbox-circle-line"></i> Natural plumping
                  effect
                </li>
                <li>
                  <i className="ri-checkbox-circle-line"></i> Stimulates
                  collagen for smoother lips
                </li>
                <li>
                  <i className="ri-checkbox-circle-line"></i> Reduces fine lines
                  and dryness
                </li>
                <li>
                  <i className="ri-checkbox-circle-line"></i> Enhances lip color
                  and radiance
                </li>
                <li>
                  <i className="ri-checkbox-circle-line"></i> Improves texture
                  and lip definition
                </li>
                <li>
                  <i className="ri-checkbox-circle-line"></i> Non-surgical and
                  minimal downtime
                </li>
                <li>
                  <i className="ri-checkbox-circle-line"></i> Suitable for all
                  skin types
                </li>
              </ul>

              <h4>🕒 Treatment Time & Results</h4>
              <ul className="list">
                <li>
                  <strong>Duration:</strong> 25–35 minutes
                </li>
                <li>
                  <strong>Results:</strong> Immediately softer, smoother lips,
                  with improved texture and color
                </li>
                <li>
                  <strong>Longevity:</strong> 3–6 weeks depending on aftercare
                </li>
                <li>
                  <strong>Downtime:</strong> Minimal — mild redness for a few
                  hours
                </li>
              </ul>

              <h4>🔍 Ideal For Clients Who Want</h4>
              <ul className="list">
                <li>
                  <i className="ri-checkbox-circle-line"></i> Hydrated,
                  youthful-looking lips
                </li>
                <li>
                  <i className="ri-checkbox-circle-line"></i> A natural plump
                  without fillers
                </li>
                <li>
                  <i className="ri-checkbox-circle-line"></i> Smoother texture
                  and fewer fine lines
                </li>
                <li>
                  <i className="ri-checkbox-circle-line"></i> Enhanced lip color
                  and definition
                </li>
                <li>
                  <i className="ri-checkbox-circle-line"></i> A refreshed,
                  glowing appearance
                </li>
              </ul>

              <h4>📌 Important Information</h4>
              <ul className="list">
                <li>
                  <i className="ri-alert-line"></i> Mild tingling or swelling is
                  normal for 12–24 hours
                </li>
                <li>
                  <i className="ri-alert-line"></i> Avoid spicy foods and direct
                  sun exposure for 24 hours
                </li>
                <li>
                  <i className="ri-alert-line"></i> Keep lips moisturized for
                  best results
                </li>
                <li>
                  <i className="ri-alert-line"></i> Perfect to combine with
                  Hydra Facial, Brows, or Lash services
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HydraLipsDetailsContent;
