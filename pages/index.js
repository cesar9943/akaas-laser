import CTO from "@/components/Common/CTO";
import ContactForm from "@/components/Common/ContactForm";
import IntroVideo from "@/components/Common/IntroVideo";
import SeoHead from "@/components/Common/SeoHead";
import TeamMember from "@/components/Common/TeamMember";
import TestimonialSliderStyle2 from "@/components/Common/TestimonialSliderStyle2";
import WorkingProcess from "@/components/Common/WorkingProcess";
import MainBanner from "@/components/HomePageDemo3/MainBanner";
import TopServices from "@/components/HomePageDemo3/TopServices";
import WhoWeAre from "@/components/HomePageDemo3/WhoWeAre";
import Footer from "@/components/Layout/Footer";
import NavbarThree from "@/components/Layout/NavbarThree";
import ServiceSlider from "@/components/Services/ServiceSlider";
import Head from "next/head";

export default function Home3() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Akaas Laser Medspa",
    description:
      "Premier medical spa in Orlando specializing in Laser Hair Removal, Body Contouring, and Facials.",
    url: "https://akaaslasermedspa.com",
    telephone: "+14074971272",
    email: "akaaslaser@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "3151 N Alafaya Trl Suite 102",
      addressLocality: "Orlando",
      postalCode: "32826",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 28.5846472,
      longitude: -81.2071182,
    },
    openingHours: "Mo-Fr 09:00-18:00",
    priceRange: "$$",
    image: "https://akaaslasermedspa.com/images/black-logo.png",
  };

  return (
    <>
      <SeoHead
        title="AKAAS Laser MedSpa in Orlando | Laser Hair Removal, Facials & Body Contouring"
        description="Medical spa in Orlando, Florida specializing in laser hair removal, body contouring, facials, and advanced aesthetic treatments near UCF and Oviedo."
        canonical="/"
        keywords="medical spa Orlando, laser hair removal Orlando, facials Orlando, body contouring Orlando, med spa near UCF"
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>
      <NavbarThree />

      <MainBanner />

      <TopServices />

      <WhoWeAre />

      <div className="radius-0">
        <ServiceSlider />
      </div>

      <WorkingProcess />

      <IntroVideo />

      <TestimonialSliderStyle2 />

      <ContactForm />

      {/* <ProjectSliderTwo /> */}

      {/* <Partners /> */}

      <TeamMember />

      <CTO />

      {/* <Article /> */}

      <Footer />
    </>
  );
}
