import Image from "next/image";

const FacialsDetailsContent = () => {
  return (
    <>
      <div className="services-details-area ptb-100">
        <div className="container">
          <div className="services-details-desc">
            <div className="article-services-image">
              <Image
                src="/images/services-details/facials-service.jpg"
                alt="image"
                width={2048}
                height={1536}
              />
            </div>
            <div className="article-services-content">
              <h3>Facials: What Are They, and What Do They Really Do?</h3>
              <p>
                Lie back and relax as a skin specialist cleanses, exfoliates and
                hydrates your skin.
              </p>
              <p>
                If you’ve never gotten a facial, you might not totally
                understand the appeal. Why would you need someone else to wash
                your face for you? But facials are so much more than that — and
                in addition to feeling great, they have huge benefits for your
                skin.
              </p>

              <h4>Benefits of getting facials</h4>

              <p>
                Even people who have clear skin can benefit from facials —
                especially because clear skin doesn’t always equate to healthy
                skin. Facials can help hydrate, plump and protect your skin for
                the long haul.
              </p>
              <p>
                Doing these treatments allows your skin to be continuously
                exfoliated, which helps bring forth new skin. This helps to:
              </p>

              <ul className="list">
                <li></li>
                <li>
                  <i className="ri-checkbox-circle-line"></i> Shrink the size of
                  your pores
                </li>
                <li>
                  <i className="ri-checkbox-circle-line"></i>Lessen your skin’s
                  oil production.
                </li>
                <li>
                  <i className="ri-checkbox-circle-line"></i>Reduce
                  hyperpigmentation (dark spots).
                </li>
                <li>
                  <i className="ri-checkbox-circle-line"></i> Help balance your
                  skin’s pH.
                </li>
              </ul>

              <p className="mt-4">
                Skin care treatments also help increase blood circulation. Good
                blood circulation in the skin helps to kill bacteria and promote
                cell regrowth, which is very important for collagen production.
              </p>

              <p>
                Collagen is a type of protein that gives your skin structure,
                strength and elasticity. As you age, though, your skin naturally
                begins to produce less collagen, which can lead to wrinkles,
                sagging and other signs of aging.
              </p>

              <h4>Types of facials : </h4>
              <p>
                If you’ve ever looked at a menu of spa services and felt
                overwhelmed by all the different types of treatments they offer,
                you already know that there are different kinds of facials and
                all kinds of add-ons to choose from. How are you supposed to
                know what’s what?
              </p>

              <div>
                <h4>1 - Standard facial</h4>
                <div className="article-services-middle-image mb-3 article-services-image">
                  <Image
                    src="/images/services-details/facial-standar.jpg"
                    alt="image"
                    width={2560}
                    height={1440}
                  />
                </div>
                <p>
                  Your standard facial is anything but basic! They typically
                  include:
                </p>

                <ul className="list">
                  <li></li>
                  <li>
                    <i className="ri-checkbox-circle-line"></i> Cleansing to
                    remove makeup, dirt and other impurities.
                  </li>
                  <li>
                    <i className="ri-checkbox-circle-line"></i>Exfoliation to
                    remove dead skin cells from the surface of your skin.
                  </li>
                  <li>
                    <i className="ri-checkbox-circle-line"></i>Moisturizer to
                    keep skin hydrated and supple.
                  </li>
                  <li>
                    <i className="ri-checkbox-circle-line"></i> Led light.
                  </li>
                </ul>

                <p className="mt-4 fw-bold">They may also involve:</p>

                <ul className="list">
                  <li></li>
                  <li>
                    <i className="ri-checkbox-circle-line"></i> Facial steaming
                    to open your pores and soften your skin.
                  </li>
                  <li>
                    <i className="ri-checkbox-circle-line"></i>Extraction of
                    blackheads or whiteheads.
                  </li>
                  <li>
                    <i className="ri-checkbox-circle-line"></i>Serums and other
                    treatments specifically chosen for your skin.
                  </li>
                </ul>
              </div>

              <div className="mt-5">
                <h4>2 - Chemical peels</h4>
                <div className="article-services-middle-image mb-3 article-services-image">
                  <Image
                    src="/images/services-details/facial-chemical.jpg"
                    alt="image"
                    width={1000}
                    height={600}
                  />
                </div>
                <p>
                  Chemical peels use a chemical solution to remove layers of
                  skin and encourage cell renewal.
                </p>
                <p>
                  There are different types of peels, all designed to do
                  different things for your skin. Which kind you get will depend
                  on your specific needs and your provider’s recommendations.{" "}
                </p>

                <p className="fw-bold">
                  Some of the facial acids most often used in chemical peels
                  are:
                </p>
                <ul className="list">
                  <li></li>
                  <li>
                    <i className="ri-checkbox-circle-line"></i> Glycolic acid, a
                    deep-penetrating alpha-hydroxy acid that helps exfoliate and
                    boost collagen production.
                  </li>
                  <li>
                    <i className="ri-checkbox-circle-line"></i>Lactic acid,
                    which helps smooth out skin texture and is a good choice for
                    sensitive skin
                  </li>
                  <li>
                    <i className="ri-checkbox-circle-line"></i>Salicylic acid, a
                    beta hydroxy acid that unclogs pores by removing dead skin.
                  </li>
                </ul>
              </div>

              <div className="mt-5">
                <h4>3 - LED light therapy</h4>
                <div className="article-services-middle-image mb-3 article-services-image">
                  <Image
                    src="/images/services-details/facial-led.jpg"
                    alt="image"
                    width={600}
                    height={600}
                  />
                </div>

                <p className="fw-bold">
                  Like mood lighting for your face, LED light therapy treats
                  various skin concerns like acne and fine lines. Different
                  colors of light penetrate your skin at different depths and
                  have different uses:
                </p>
                <ul className="list">
                  <li></li>
                  <li>
                    <i className="ri-checkbox-circle-line"></i> Red light can
                    reduce inflammation and combat signs of aging.
                  </li>
                  <li>
                    <i className="ri-checkbox-circle-line"></i>Yellow light can
                    reduce hyperpigmentation.
                  </li>
                  <li>
                    <i className="ri-checkbox-circle-line"></i>Blue light kills
                    bacteria and speeds up acne healing.
                  </li>
                </ul>
              </div>

              <h4 className="mt-5">Who is microdermabrasion for?</h4>

              <p>
                Microdermabrasion is considered a safe procedure for most skin
                types and colors. People might choose to get the procedure if
                they have the following skin concerns:
              </p>

              <ul className="list">
                <li></li>
                <li>
                  <i className="ri-checkbox-circle-line"></i> fine lines and
                  wrinkles
                </li>
                <li>
                  <i className="ri-checkbox-circle-line"></i>hyperpigmentation,
                  age spots and brown spots
                </li>
                <li>
                  <i className="ri-checkbox-circle-line"></i>enlarged pores and
                  blackheads
                </li>
                <li>
                  <i className="ri-checkbox-circle-line"></i>acne and acne scars
                </li>
                <li>
                  <i className="ri-checkbox-circle-line"></i>stretch marks
                </li>
                <li>
                  <i className="ri-checkbox-circle-line"></i>dull-looking skin
                  complexion
                </li>
                <li>
                  <i className="ri-checkbox-circle-line"></i>uneven skin tone
                  and texture
                </li>
                <li>
                  <i className="ri-checkbox-circle-line"></i>melasma
                </li>
                <li>
                  <i className="ri-checkbox-circle-line"></i>sun damage
                </li>
              </ul>

              <h4 className="mt-5">Preparing for microdermabrasion</h4>
              <p>
                Microdermabrasion is a nonsurgical, minimally invasive
                procedure. There’s very little you need to do to prepare for it.
              </p>
              <p>
                It a good idea to discuss your skin concerns with a skin care
                professional to find out if microdermabrasion is the right fit
                for you. Discuss any past cosmetic procedures and surgeries, as
                well as allergies and medical conditions.{" "}
              </p>
              <p>
                You may be told to avoid sun exposure, tanning creams, and
                waxing for about a week before treatment. You may also be
                advised to stop using exfoliating creams and masks approximately
                3 days prior to treatment.{" "}
              </p>
              <p>
                Remove any makeup and cleanse your face before the procedure
                begins.{" "}
              </p>

              <h4 className="mt-5">Side effects of microdermabrasion</h4>
              <p>
                Common side effects of microdermabrasion include mild
                tenderness, swelling, and redness. These generally go away
                within a few hours after treatment.
              </p>
              <p>
                You might be advised to use a moisturizer to minimize dry and
                flaky skin. Minor bruising may also occur. This is mostly caused
                by the suction process during the treatment.
              </p>

              <h4 className="mt-5">What to expect after microdermabrasion</h4>

              <p>
                There is little to no downtime after microdermabrasion. You
                should be able to resume your daily activities immediately.{" "}
              </p>

              <p>
                Keep your skin hydrated and use gentle skin care products. Avoid
                using topical acne medications for at least one day after
                treatment. It’s extremely important to protect your skin with
                sunscreen. Your skin can be more sensitive to the sun in the few
                weeks after the treatment.{" "}
              </p>
              <p>
                You can expect to see noticeable results immediately after the
                procedure. The number of microdermabrasion sessions needed will
                depend on the severity of your skin concerns as well as your
                expectations.
              </p>
              <p>
                Your provider will likely design a plan for the initial number
                of sessions, as well as periodic maintenance.
              </p>
              <div>
                <Image
                  src="/images/services-details/facial-microdermabrasion.jpg"
                  alt="image"
                  width={202}
                  height={248}
                />
              </div>

              <h4 className="mt-5">How often should you get a facial?</h4>
              <p>
                The frequency of your facials depends on what type of skin
                issues you’re dealing with. Our Facial Specialist says every
                four to six weeks is ideal because it aligns with your skin’s
                natural cycle — about 30 days.
              </p>

              <div className="article-services-middle-image">
                <Image
                  src="/images/services-details/facial-offen.jpg"
                  alt="image"
                  width={226}
                  height={223}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FacialsDetailsContent;
