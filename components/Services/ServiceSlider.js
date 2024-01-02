import Link from "next/link";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { servicesData } from "./data";

const ServiceSlider = () => {
  return (
    <>
      <div className="services-area with-radius ptb-100">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-12">
              <div
                className="services-section-content"
                data-aos="fade-down"
                data-aos-delay="80"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <span>SERVICES</span>
                <h3>
                  We Provide the Best Quality <b>Services</b>
                </h3>
                <p>
                  We offer Laser Hair Removal, SculpSure, Facial, Body
                  Contouring, Lymphatic Drainage, Cryolipolysis, Nails, Botox,
                  Fillers, PRP, Weight Loss Injections, IV Therapy and more.
                </p>
                <div className="services-section-btn">
                  <Link href="/services">
                    <a className="default-btn">Explore All Services</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-8 col-md-12">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                pagination={{ clickable: true }}
                autoplay={{ delay: 6000, disableOnInteraction: true }}
                breakpoints={{
                  0: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper services-slides"
              >
                {servicesData.map((service, index) => (
                  <SwiperSlide key={index}>
                    <div className="services-item">
                      <div className="services-image">
                        <Link href="/services/service-details">
                          <a>
                            <img src={service.imageUrl} alt="image" />
                          </a>
                        </Link>
                      </div>
                      <div className="services-content">
                        <h3>
                          <Link href="/services/service-details">
                            <a>{service.title}</a>
                          </Link>
                        </h3>
                        {/* Max 100 chars */}

                        <p>
                          {service.description.length > 100
                            ? service.description.slice(0, 100) + "..."
                            : service.description}
                        </p>
                        <Link href="/services/service-details">
                          <a className="services-btn">View More</a>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceSlider;
