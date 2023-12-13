import CTO from "@/components/Common/CTO";
import ContactForm from "@/components/Common/ContactForm";
import IntroVideo from "@/components/Common/IntroVideo";
import Partners from "@/components/Common/Partners";
import TeamMember from "@/components/Common/TeamMember";
import TestimonialSliderStyle2 from "@/components/Common/TestimonialSliderStyle2";
import WorkingProcess from "@/components/Common/WorkingProcess";
import MainBanner from "@/components/HomePageDemo3/MainBanner";
import TopServices from "@/components/HomePageDemo3/TopServices";
import WhoWeAre from "@/components/HomePageDemo3/WhoWeAre";
import Footer from "@/components/Layout/Footer";
import NavbarThree from "@/components/Layout/NavbarThree";
import ProjectSliderTwo from "@/components/Projects/ProjectSliderTwo";
import ServiceSlider from "@/components/Services/ServiceSlider";

export default function Home3() {
  return (
    <>
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

      <ProjectSliderTwo />

      <Partners />

      <TeamMember />

      <CTO />

      {/* <Article /> */}

      <Footer />
    </>
  );
}
