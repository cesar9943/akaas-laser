import Link from "next/link";
import { servicesData } from "./data";

const AllServicesCard = () => {
  return (
    <>
      <div className="services-area bg-with-14042C-color rounded-0 ptb-100">
        <div className="container">
          <div className="section-title">
            <span>SERVICES</span>
            <h2>
              We Provide the Best Quality <b>Services</b>
            </h2>
            <p>
              We are a technology solutions providing company all over the world
              with over 40 years of experience. Lorem ipsum dolor sit amet.
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
