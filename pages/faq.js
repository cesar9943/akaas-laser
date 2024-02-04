import CTO from "@/components/Common/CTO";
import FaqContent from "@/components/FAQ/FaqContent";
import Footer from "@/components/Layout/Footer";
import NavbarThree from "@/components/Layout/NavbarThree";
import Link from "next/link";
// Definición de datos para las FAQs
const faqData = [
  {
    question: "How does Laser Hair Removal work?",
    answer:
      "Laser Hair Removal targets and destroys hair follicles with Elite MPX Laser Technology, ensuring effective treatment for all skin types with minimal discomfort. It results in permanent hair reduction over a series of treatments.",
  },
  {
    question: "What can I expect from SculpSure Body Contouring?",
    answer:
      "SculpSure offers a non-invasive way to reduce stubborn fat in areas like the abdomen and thighs. Each session lasts 25 minutes, with results visible as early as 6 weeks and optimal outcomes in 12 weeks.",
  },
  {
    question: "How often should I get Facials for the best results?",
    answer:
      "For optimal skin health and radiance, we recommend a facial every 4 to 6 weeks. This frequency matches your skin's natural renewal cycle, allowing treatments to work in harmony with your body's physiology.",
  },
  {
    question: "Are Botox & Fillers safe?",
    answer:
      "Botox and fillers are FDA-approved, safe treatments for reducing wrinkles and restoring facial volume. Our specialists are highly trained to ensure the safety and effectiveness of these procedures.",
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
  {
    question: "How long do the effects of Botox last?",
    answer:
      "The effects of Botox can last anywhere from 3 to 6 months. As muscle action gradually returns, the lines and wrinkles begin to reappear and need to be treated again to maintain the smooth appearance.",
  },
  {
    question: "Is there any downtime after a SculpSure treatment?",
    answer:
      "There is no downtime required after SculpSure treatments, allowing clients to resume their daily activities immediately. Some may experience temporary redness or soreness in the treated area.",
  },
  {
    question: "How do I know which facial is right for me?",
    answer:
      "Our skincare specialists will evaluate your skin type and concerns to recommend the best facial treatment. We customize our facials to address your unique skin needs, ensuring optimal results.",
  },
  {
    question: "Are the spa treatments suitable for men as well?",
    answer:
      "Yes, our spa services are designed to be inclusive and beneficial for both men and women. We offer a range of treatments that cater to everyone's needs.",
  },
];
export default function Faq() {
  return (
    <>
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
                <Link href="/">
                  <a>Home</a>
                </Link>
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
