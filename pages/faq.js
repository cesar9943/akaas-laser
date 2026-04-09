import CTO from "@/components/Common/CTO";
import FaqContent from "@/components/FAQ/FaqContent";
import Footer from "@/components/Layout/Footer";
import NavbarThree from "@/components/Layout/NavbarThree";
import Head from "next/head";
import Link from "next/link";

// Definición de datos para las FAQs
const faqData = [
  {
    question: "What are your main services?",
    answer:
      "Our most requested services include Laser Hair Removal, SculpSure body sculpting, advanced facial and laser treatments, massage and lymphatic therapies, Botox, Morpheus8 with PRP, HIFU, Fibroblast, intimate whitening, and stretch mark camouflage. We also offer additional medspa services depending on your goals.",
  },
  {
    question: "What type of clients do you work with?",
    answer:
      "We work with both men and women of all skin types who are looking for effective, non-invasive aesthetic treatments. Our technology is safe and effective for a wide range of skin tones.",
  },
  {
    question: "How much do your services cost?",
    answer:
      "Pricing varies by treatment and package size. Many services include single-session and multi-session pricing, and some body contouring treatments also offer bundle options with lymphatic massage. Contact us for a personalized recommendation.",
  },
  {
    question: "What results do you guarantee?",
    answer:
      "While individual results may vary, we use FDA-approved technology proven to deliver results. For laser hair removal, most clients see significant permanent reduction after a series of treatments.",
  },
  {
    question: "How are you different from other medspas?",
    answer:
      "We distinguish ourselves through our use of the Elite MPX Laser, which allows us to treat all skin types safely. Our team is highly trained, and we prioritize client comfort and safety above all else.",
  },
  {
    question: "How long have you been in the sector?",
    answer:
      "Akaas Laser Medspa has been serving the Orlando community with dedication and expertise, establishing a reputation for excellence in aesthetic treatments.",
  },
  {
    question: "What certifications do you have?",
    answer:
      "Our specialists are certified in their respective fields, including laser safety and specific treatment protocols. We adhere to the highest standards of medical aesthetics.",
  },
  {
    question: "How does Laser Hair Removal work?",
    answer:
      "Laser Hair Removal targets and destroys hair follicles with Elite MPX Laser Technology, ensuring effective treatment for all skin types with minimal discomfort. It results in permanent hair reduction over a series of treatments.",
  },
  {
    question: "What can I expect from SculpSure Body Contouring?",
    answer:
      "SculpSure is a non-invasive way to contour stubborn fat using customized packages based on treatment area size. Sessions are fast, there is no downtime, and clients typically start seeing changes around 6 weeks with fuller results over the following weeks.",
  },
  {
    question: "How often should I get Facials for the best results?",
    answer:
      "For optimal skin health and radiance, we recommend a facial every 4 to 6 weeks. This frequency matches your skin's natural renewal cycle, allowing treatments to work in harmony with your body's physiology.",
  },
  {
    question: "Are Botox treatments safe?",
    answer:
      "Botox is a widely used, non-surgical treatment for expression lines when performed by a trained professional. We customize the treatment based on your goals and review whether you are a good candidate before proceeding.",
  },
  {
    question: "What are the benefits of Massage Therapy?",
    answer:
      "Massage therapy offers stress relief, improved circulation, reduced muscle stiffness, and a boost in well-being. It's beneficial for both the mind and body, providing a rejuvenating and relaxing experience.",
  },
  {
    question: "What services are included in Nail treatments?",
    answer:
      "Our nail services range from basic manicures and pedicures to sophisticated nail art. We focus on the health and beauty of your nails, ensuring a polished, professional finish.",
  },
  {
    question: "What is IV Nutritional Therapy?",
    answer:
      "IV Nutritional Therapy delivers essential nutrients directly to your bloodstream, bypassing the digestive system for maximum absorption. It's ideal for boosting immunity, enhancing energy, and supporting detoxification.",
  },
  {
    question: "Can I combine different spa services in one visit?",
    answer:
      "Absolutely! Many of our clients combine services like facials, massages, and nail treatments for a comprehensive spa experience. Our team can help you plan the perfect spa day.",
  },
];

export default function Faq() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>
      <NavbarThree />
      <div
        className="page-banner-area mt-94"
        style={{ backgroundImage: `url(/images/page-banner/banner-bg-4.jpg` }}
      >
        <div className="container">
          <div
            className="page-banner-content"
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-once="true"
          >
            <h2>Faq</h2>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>Faq</li>
            </ul>
          </div>
        </div>
      </div>
      <FaqContent faqData={faqData} />
      <CTO />
      <Footer />
    </>
  );
}
