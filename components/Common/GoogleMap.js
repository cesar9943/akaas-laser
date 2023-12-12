const GoogleMap = () => {
  return (
    <>
      <div className="container ptb-100">
        <div className="map-location">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448448.5380759425!2d-81.2071182!3d28.5846472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e769e3b2d6f52d%3A0x69467692372797!2sAKAAS%20LASER%20MEDSPA!5e0!3m2!1ses!2sus!4v1702368532475!5m2!1ses!2sus"
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default GoogleMap;
