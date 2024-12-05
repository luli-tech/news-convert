import { NavLink, Outlet } from "react-router-dom";
import { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Footer from "./footer";
import { useDispatch } from "react-redux";
import { fetchNews, setSearch } from "../store";
import Sidebar from "./sideBar";


function Navbar() {
  const dispatch = useDispatch();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery) {
      dispatch(setSearch(searchQuery));
      dispatch(fetchNews(searchQuery));
      setSearchQuery("");
    }
  };

  return (
    <Fragment>
      <nav className="navbar">
        <NavLink to="/" className="navbar-logo">
          LuLi-News
        </NavLink>
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Search news..."
            className="navbar-search"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </form>
        <button onClick={toggleSidebar} className="navbar-toggle">
          <FontAwesomeIcon icon={faBars} />
        </button>
        <Sidebar
          open={sidebarOpen}
          toggleSidebar={toggleSidebar}
          handleSearchSubmit={handleSearchSubmit}
        />
      </nav>
      <div>
        <Outlet />
        <Footer />
      </div>
    </Fragment>
  );
}

export default Navbar;
