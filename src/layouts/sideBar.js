import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMultiply,
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
import { height } from "@fortawesome/free-brands-svg-icons/faGoogle";
function Sidebar({ open, letOpen, handleSearchSubmit }) {
  let [openCategory, setOpenCategory] = useState(false);
  function toggleCategory() {
    setOpenCategory(!openCategory);
  }

  function getcat(e) {
    const category = e.target.textContent;
    handleSearchSubmit(null, category); // Trigger search with the selected category
  }

  let active = ({ isActive }) => ({
    color: isActive ? "white" : "black",
    textDecoration: "none",
    display: "flex",
    height: "40px",
    gap: "20px",
    alignItems: "center",
    fontWeight: "bold",
    padding: "5px 15px",
  });
  return (
    <div className={`${open ? "sidebar" : "close-side"} "bread"`}>
      <div className="close-contain">
        <FontAwesomeIcon
          onClick={letOpen}
          className="close-sidebar"
          icon={faMultiply}
        ></FontAwesomeIcon>
      </div>
      <div style={{ height: "15rem" }}>
        <img src="logo192.png" />
        <p>AYOMIKUN OLABODE</p>
      </div>
      <div className="nav-list">
        <div>
          <NavLink style={active} to="/">
            <FontAwesomeIcon icon={faHome} /> Home
          </NavLink>
        </div>
        <div
          onClick={toggleCategory}
          className="cate-container"
          style={{ cursor: "pointer" }}
        >
          <p
            style={{
              display: "flex",
              fontWeight: "bold",
              alignItems: "center",
              gap: "20px",
              padding: "10px 15px",
            }}
          >
            <FontAwesomeIcon icon={faAngleDown} />
            Categories
          </p>
          <ul
            onClick={getcat}
            className="categories"
            style={{
              height: openCategory ? "300px" : "",
              transition: "0.3s",
            }}
          >
            <li onClick={getcat}>Education</li>
            <li onClick={getcat}>Fashion</li>
            <li>Lifestyle</li>
            <li>Gaming</li>
            <li>Entertainment</li>
          </ul>
        </div>
        <div>
          <NavLink to="video" style={active}>
            <FontAwesomeIcon icon={faVideo} /> Video Single
          </NavLink>
        </div>
        <div>
          <NavLink to="channels" style={active}>
            <FontAwesomeIcon icon={faTelevision} /> Channels
          </NavLink>
        </div>
        <div>
          <NavLink to="blog" style={active}>
            <FontAwesomeIcon icon={faBlog} />
            Blog
          </NavLink>
        </div>
        <div>
          <NavLink to="faq" style={active}>
            <FontAwesomeIcon icon={faQuestion} /> Faq
          </NavLink>
        </div>
        <div>
          <NavLink to="*" style={active}>
            <FontAwesomeIcon icon={faMultiply} /> 404 Page
          </NavLink>
        </div>
        <div>
          <NavLink to="contact" style={active}>
            <FontAwesomeIcon icon={faContactCard} /> Contact Us
          </NavLink>
        </div>
        <div>
          <NavLink to="login" style={active}>
            <FontAwesomeIcon icon={faSignIn} />
            Login
          </NavLink>
        </div>
        <div>
          <NavLink to="register" style={active}>
            <FontAwesomeIcon icon={faRegistered} />
            Register
          </NavLink>
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
