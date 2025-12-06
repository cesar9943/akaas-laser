import Link from "next/link";

const BlogGrid = () => {
  return (
    <>
      <div className="blog-area pt-100 pb-100">
        <div className="container">
          <div className="section-title">
            <span>ARTICLE</span>
            <h2>
              Read Our Blog To Get All Recent <b>News</b>
            </h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-12">
              <div
                className="blog-card"
                data-aos="fade-up"
                data-aos-delay="80"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="blog-image">
                      <Link href="/blog/top-6-laser-clinics-orlando">
                        <img src="/images/blog/blog-1.jpg" alt="image" />
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="blog-content">
                      <div className="date">December 6, 2025</div>
                      <h3>
                        <Link href="/blog/top-6-laser-clinics-orlando">
                          Top 6 Laser Clinics in Orlando (2025)
                        </Link>
                      </h3>
                      <p>
                        Discover the best laser clinics in Orlando for 2025. We
                        compare services, prices, and results to help you choose
                        the right medspa for your needs.
                      </p>
                      <Link
                        href="/blog/top-10-laser-clinics-orlando"
                        className="blog-btn"
                      >
                        View More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="blog-shape-1">
          <img src="/images/blog/blog-shape-1.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default BlogGrid;
