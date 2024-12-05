import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faVideo,
  faAngleDown,
  faTelevision,
  faBlog,
  faQuestion,
  faContactCard,
  faSignIn,
  faRegistered,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Sidebar({ open, toggleSidebar }) {
  const [openCategory, setOpenCategory] = useState(false);

  const toggleCategory = () => {
    setOpenCategory((prevState) => !prevState);
  };

  const activeStyle = ({ isActive }) => ({
    color: isActive ? "white" : "white",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    padding: "12px",
    fontWeight: "bold",
  });

  return (
    <>
      {open && <div className="overlay" onClick={toggleSidebar}></div>}
      <div className={`sidebar ${open ? "open" : "closed"}`}>
        <div className="profile" style={profileStyle}>
          <img
            className="img"
            src="IMG_5966.JPG" // Ensure this path is correct and the image exists
            alt="Profile"
            style={imageStyle}
          />
          <p className="name" style={nameStyle}>
            AYOMIKUN OLABODE
          </p>
        </div>
        <div className="nav-list">
          <NavLink style={activeStyle} to="/">
            <FontAwesomeIcon icon={faHome} /> Home
          </NavLink>
          <div
            onClick={toggleCategory}
            className="cate-container"
            style={{ cursor: "pointer" }}
          >
            <p className="categories-title">
              <FontAwesomeIcon icon={faAngleDown} /> Categories
            </p>
            <ul
              style={{
                height: openCategory ? "200px" : "0", // Set height based on openCategory state
                overflow: "hidden", // Ensure no overflow when collapsed
                transition: "height 0.3s ease", // Smooth transition
              }}
              className={`categories ${openCategory ? "open" : ""}`}
            >
              <li>
                <NavLink to="/" style={activeStyle}>
                  Education
                </NavLink>
              </li>
              <li>
                <NavLink to="/" style={activeStyle}>
                  Fashion
                </NavLink>
              </li>
              <li>
                <NavLink to="/" style={activeStyle}>
                  Lifestyle
                </NavLink>
              </li>
              <li>
                <NavLink to="/" style={activeStyle}>
                  Gaming
                </NavLink>
              </li>
              <li>
                <NavLink to="/" style={activeStyle}>
                  Entertainment
                </NavLink>
              </li>
            </ul>
          </div>
          <NavLink to="video" style={activeStyle}>
            <FontAwesomeIcon icon={faVideo} /> Video Single
          </NavLink>
          <NavLink to="channels" style={activeStyle}>
            <FontAwesomeIcon icon={faTelevision} /> Channels
          </NavLink>
          <NavLink to="blog" style={activeStyle}>
            <FontAwesomeIcon icon={faBlog} /> Blog
          </NavLink>
          <NavLink to="faq" style={activeStyle}>
            <FontAwesomeIcon icon={faQuestion} /> FAQ
          </NavLink>
          <NavLink to="contact" style={activeStyle}>
            <FontAwesomeIcon icon={faContactCard} /> Contact Us
          </NavLink>
          <NavLink to="login" style={activeStyle}>
            <FontAwesomeIcon icon={faSignIn} /> Login
          </NavLink>
          <NavLink to="register" style={activeStyle}>
            <FontAwesomeIcon icon={faRegistered} /> Register
          </NavLink>
        </div>
      </div>
    </>
  );
}

const profileStyle = {
  height: "15rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  background:
    "linear-gradient(112.1deg,rgb(32,38,57),11.4%,rgb(63,76,119)70.2%)",
};

const imageStyle = {
  width: "70%",
  borderRadius: "50%",
  height: "70%",
};

const nameStyle = {
  textAlign: "center",
  fontWeight: "bold",
  padding: "20px",
};

export default Sidebar;
