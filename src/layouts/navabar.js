import { NavLink, Outlet } from "react-router-dom";
import { Fragment } from "react";
import { useState } from "react";
import Footer from "./footer";
import Sidebar from "./sideBar";
function Navbar() {
  let [on, setOn] = useState(false);
  let visible = () => {
    setOn(!on);
  };
  return (
    <Fragment>
      <nav
        className="navbar"
        style={{
          background: "black",
          color: "white",
          display: "flex",
          justifyContent: "space-around",
          padding: "20px",
          fontFamily: "sans-serif",
        }}
      >
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
          <input type="text" />
        </form>
        <div>
          <button onClick={visible}>{!on ? "open" : "close"}</button>
        </div>
      </nav>
      {on && (
        <div className="sidebar">
          <Sidebar visible={visible} />
        </div>
      )}
      <div className="outlet">
        <Outlet />
      </div>
      <Footer />
    </Fragment>
  );
}
export default Navbar;
