import Image from "next/image";

const TeamMember = () => {
  const teamData = [
    {
      name: "Lourdes Fleita Luis",
      role: "Owner",
      specialty: "Laser Technician",
      imageUrl: "/images/team/team-2.jpg",
      socialLinks: {
        facebook: "https://www.facebook.com/EnvyTheme",
        twitter: "https://twitter.com/?lang=en",
        instagram: "https://www.instagram.com/",
      },
    },
    {
      name: "Diana Pabon",
      role: "Manager",
      specialty: "Facial Specialist",
      imageUrl: "/images/team/team-3.jpg",
      socialLinks: {
        facebook: "https://www.facebook.com/EnvyTheme",
        twitter: "https://twitter.com/?lang=en",
        instagram: "https://www.instagram.com/",
      },
    },
    {
      name: "Amilys García",
      role: "Doctor",
      imageUrl: "/images/team/team-1.jpg",
      socialLinks: {
        facebook: "https://www.facebook.com/EnvyTheme",
        twitter: "https://twitter.com/?lang=en",
        instagram: "https://www.instagram.com/",
      },
    },
    {
      name: "Larissa Carvalho",
      role: "Massage therapist",
      imageUrl: "/images/team/team-4.0.jpg",
      socialLinks: {
        facebook: "https://www.facebook.com/EnvyTheme",
        twitter: "https://twitter.com/?lang=en",
        instagram: "https://www.instagram.com/",
      },
    },
  ];

  return (
    <>
      <div className="team-area pt-100 pb-75">
        <div className="container">
          <div className="section-title section-style-two">
            <div className="section-bg-text">TEAM</div>
            <span>TEAM MEMBER</span>
            <h2>
              Meet Our <br /> Professional Team
            </h2>
            <p>
              Our team is made up of highly trained professionals who are
              passionate about their work. We are committed to providing you
              with the best service and the best results.{" "}
            </p>
          </div>

          <div className="row justify-content-center">
            {teamData.map((member, index) => (
              <div className="col-lg-3 col-sm-6" key={index}>
                <div className="single-team-card">
                  <div className="team-image" data-tilt>
                    <Image
                      width={300}
                      height={400}
                      src={member.imageUrl}
                      alt={member.name}
                    />

                    <ul className="team-social">
                      {Object.keys(member.socialLinks).map(
                        (socialMedia, socialIndex) => (
                          <li key={socialIndex}>
                            <a
                              href={member.socialLinks[socialMedia]}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <i className={`ri-${socialMedia}-fill`}></i>
                            </a>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                  <div
                    className="team-content"
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    <h3>{member.name}</h3>
                    <span>{member.role}</span>
                    {member.specialty && (
                      <span style={{ marginTop: "0px" }}>
                        {member.specialty}
                      </span>
                    )}
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

export default TeamMember;
