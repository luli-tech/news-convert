import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMultiply } from "@fortawesome/free-solid-svg-icons";
function Sidebar({ letOpen }) {
  let active = ({ isActive }) => ({
    backgroundColor: isActive ? "red" : "",
    textDecoration: "none",
    color: "black",
    width: "100%",
    padding: "10px",
  });
  return (
    <div className="overlay">
      <div>
        <div className="close-container">
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
              Home
            </NavLink>
          </div>
          <div>
            <p>Categories</p>
          </div>
          <div>
            <NavLink to="video" style={active}>
              Video Single
            </NavLink>
          </div>
          <div>
            <NavLink to="channels" style={active}>
              Channels
            </NavLink>
          </div>
          <div>
            <NavLink to="blog" style={active}>
              Blog
            </NavLink>
          </div>
          <div>
            <NavLink to="faq" style={active}>
              Faq
            </NavLink>
          </div>
          <div>
            <NavLink to="*" style={active}>
              404 Page
            </NavLink>
          </div>
          <div>
            <NavLink to="contact" style={active}>
              Contact Us
            </NavLink>
          </div>
          <div>
            <NavLink to="login" style={active}>
              Login
            </NavLink>
          </div>
          <div>
            <NavLink to="register" style={active}>
              Register
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
