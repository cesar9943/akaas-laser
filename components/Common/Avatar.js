import { getRandomColor } from "@/utils/common";
import PropTypes from "prop-types";

const Avatar = ({ imageUrl, name }) => {
  const getInitials = () => {
    if (!name) return "";

    const initials = name
      .split(" ")
      .map((word) => word[0])
      .join("");

    return initials.toUpperCase();
  };

  const avatarStyle = {
    backgroundColor: imageUrl ? "transparent" : getRandomColor(),
    color: imageUrl ? "transparent" : "#fff",
    width: "50px",
    height: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "0",
    left: "0",
  };

  return (
    <div className="rounded-circle" style={avatarStyle}>
      {imageUrl ? (
        <img
          src={imageUrl}
          alt="Avatar"
          className="img-fluid rounded-circle w-100"
        />
      ) : (
        <span>{getInitials()}</span>
      )}
    </div>
  );
};

Avatar.propTypes = {
  imageUrl: PropTypes.string,
  name: PropTypes.string,
};

export default Avatar;
