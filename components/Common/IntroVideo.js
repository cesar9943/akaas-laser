import FsLightbox from "fslightbox-react";
import { useState } from "react";

const IntroVideo = () => {
  // if toggler is updated when lightbox is closed it will open it
  // if toggler is updated when lightbox is opened it will close it
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/watch?v=bk7McNUjWgw"]}
      />

      <div className="video-area">
        <div className="container">
          <div
            className="video-view-content"
            data-aos="fade-up"
            data-aos-delay="80"
            data-aos-duration="800"
            data-aos-once="true"
          >
            <div className="video-image">
              <img src="/images/akasplace.jpg" alt="image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IntroVideo;
