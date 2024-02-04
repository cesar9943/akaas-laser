import Link from "next/link";
import { servicesData } from "./data";

const AllServicesCard = () => {
  return (
    <>
      <div className="services-area bg-with-14042C-color rounded-0 ptb-100">
        <div className="container">
          <div className="section-title">
            <h2>
              <b>Services</b>
            </h2>
            <p>
              We provide the best in laser hair removal and medical spa
              services. Elevate your self-care routine with our expert
              treatments tailored for your ultimate satisfaction. Your journey
              to radiant beauty starts here. Continue to discover the
              unparalleled excellence that sets us apart.
            </p>
          </div>

          <div className="row justify-content-center">
            {servicesData.map((service, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="services-item">
                  <div className="services-image">
                    <Link href={service.link}>
                      <a>
                        <img src={service.imageUrl} alt="image" />
                      </a>
                    </Link>
                  </div>
                  <div className="services-content">
                    <h3>
                      <Link href={service.link}>
                        <a>{service.title}</a>
                      </Link>
                    </h3>
                    <p>{service.description}</p>
                    <Link href={service.link}>
                      <a className="services-btn">View More</a>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllServicesCard;
