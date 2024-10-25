import { NavLink, Outlet } from "react-router-dom";
import { Fragment } from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNavicon } from "@fortawesome/free-solid-svg-icons";
import Footer from "./footer";
import Sidebar from "./sideBar";
function Navbar() {
  let [on, setOn] = useState(false);

  let visible = () => {
    setOn(!on);
  };
  return (
    <Fragment>
      <nav className="navbar">
        <NavLink
          style={{
            textDecoration: "none",
            color: "white",
            fontSize: "20px",
            fontWeight: "bold",
          }}
          to="/"
        >
          Logo
        </NavLink>
        <form>
          <input
            type="text"
            placeholder="search-news..."
            style={{ padding: "5px", outline: "none", borderRadius: "5px" }}
          />
        </form>
        <div>
          <button
            onClick={visible}
            style={{
              background: "red",
              border: "none",
              borderRadius: "6px",
              overflow: "hidden",
            }}
          >
            <FontAwesomeIcon className="nav-icon" icon={faNavicon} />
          </button>
        </div>
      </nav>
      <div className={`${on ? "sidebar" : "close-side"}`}>
        <Sidebar visible={visible} />
      </div>

      <div className="outlet">
        <Outlet />
      </div>
      <Footer />
    </Fragment>
  );
}
export default Navbar;
