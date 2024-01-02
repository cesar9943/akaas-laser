import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Avatar from "./Avatar";

const TestimonialSliderStyle2 = () => {
  // Array de testimonios con la información
  const testimonials = [
    {
      content:
        "Been coming here for laser hair removal with Lourdes and she’s incredible. I’ve  already seen huge results already after 6 sessions, especially on my legs! I’ve tried laser at other places in the past and didn’t notice much of a difference but now I’m finally about 90% hair free! It’s nice to be able to show off my legs and it not look like werewolves anymore haha. Highly recommend!",
      author: "Angie",
      date: "2 weeks ago",
      image:
        "https://lh3.googleusercontent.com/a-/ALV-UjVobOnxyfgL5F4zDPhHyv1vF0mjzqmM2P5vPCU08qqFJV9_=w36-h36-p-rp-mo-ba3-br100",
      rating: [1, 1, 1, 1, 1],
      link: "https://maps.app.goo.gl/1wmGwChjUcDw1XVk6",
    },
    {
      content:
        "Highly recommended this place if you are thinking on doing laser hair removal this is the best place!, no pain at all comparing to other places. You will start noticing results from session 1 and Lourdes will treat you like you are home, always super professional and goes above and beyond. Planning on doing others services in the future.",
      author: "Amarilys Rodriguez",
      date: "3 weeks ago",
      image:
        "https://lh3.googleusercontent.com/a-/ALV-UjW2u-mUegq2GdghHyfpKVthrO-f80T3G8DUtMiOw2Qulsc=w36-h36-p-rp-mo-br100",
      rating: [1, 1, 1, 1, 1],
      link: "https://maps.app.goo.gl/BbYSQJEV5rikY43c8",
    },
    {
      content:
        "Desde que entras te sientes en un ambiente agradable y relajante. Lourdes es excelente en lo que hace, te explica y es muy profesional, lo mejor es que desde la primera sesión ves los cambios. Muy recomendado en todos los aspectos!",
      author: "Claudia Ximena Rodriguez Mateus",
      date: "3 months ago",
      image:
        "https://lh3.googleusercontent.com/a-/ALV-UjWIckuGeghFSOHKk5xirDmGzIv8Z8_5XbwsCsM1fradRGxg=w36-h36-p-rp-mo-br100",
      rating: [1, 1, 1, 1, 1],
      link: "https://maps.app.goo.gl/CJJ6u5EwSWgZc7dk7",
    },
    {
      content: `Lourdes is amazing! She is such an expert and really knows what she's doing. She's so funny, friendly, and welcoming, and it changes the whole experience for the better. If you're considering laser hair removal, I would 100% recommend going to AKAAS!
        I’m on my 5th session and I have no more hair! It takes less than 10 minutes for my full Brazilian session. Great experience. `,
      author: "pinheiromedici",
      date: "8 months ago",
      image:
        "https://lh3.googleusercontent.com/a-/ALV-UjW9MqG6Tq_3sdHnQ_fLDzkUTNFLIc9nbFGO2vq8r0xMynU=w36-h36-p-rp-mo-br100",
      rating: [1, 1, 1, 1, 1],
      link: "https://maps.app.goo.gl/VcVj1VY3iKZVWfg39",
    },
    {
      content:
        "Lourdes was beyond amazing. She was kind, funny and made me feel extremely comfortable. 1000% recommend coming here if you are considering Laser or any of the many other services she offers. She was a delight and i look forward to all of my upcoming sessions with her.",
      author: "Tiffany Brown",
      date: "7 months ago",
      rating: [1, 1, 1, 1, 1],
      link: "https://maps.app.goo.gl/8Frk92Hsqg4xJQJZ9",
    },
  ];

  return (
    <>
      <div className="testimonials-area ptb-100">
        <div className="container-fluid">
          <div className="section-title section-style-two">
            <div className="section-bg-text">FEEDBACK</div>
            <span>TESTIMONIALS</span>
            <h2>Our Client&apos;s Feedback</h2>
          </div>

          <Swiper
            slidesPerView={4}
            spaceBetween={25}
            centeredSlides={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 4,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper testimonials-slides"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <a href={testimonial.link} target="_blank" rel="noreferrer">
                  <div className="single-testimonials-card">
                    <p>{testimonial.content}</p>

                    <div className="info-item-box">
                      <Avatar
                        name={testimonial.author}
                        imageUrl={testimonial.image}
                      />

                      <h4>
                        {testimonial.author} - <span>{testimonial.date}</span>
                      </h4>
                      <ul className="rating-list">
                        {testimonial.rating.map((star, i) => (
                          <li key={i}>
                            <i
                              className={star ? "ri-star-fill" : "ri-star-line"}
                            ></i>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default TestimonialSliderStyle2;
