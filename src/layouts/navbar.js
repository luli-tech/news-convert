import { NavLink, Outlet } from "react-router-dom";
import { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Footer from "./footer";
import Sidebar from "./sideBar";
import { useDispatch } from "react-redux";
import { fetchNews, setSearch } from "../store";

function Navbar() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  function letOpen() {
    setOpen(!open);
  }

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value); // Update the local state with the input value
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    if (searchQuery) {
      dispatch(setSearch(searchQuery)); // Update Redux state with the search query
      dispatch(fetchNews(searchQuery)); // Fetch news with the new query
      setSearchQuery(""); // Clear the input field after submission
    }
  };

  return (
    <Fragment>
      <nav className="navbar">
        <NavLink to="/" className="navbar-logo">
          Logo
        </NavLink>
        <form onSubmit={handleSearchSubmit}>
          {" "}
          {/* Use handleSearchSubmit for form submission */}
          <input
            type="text"
            placeholder="search-news..."
            className="navbar-search"
            value={searchQuery}
            onChange={handleSearchChange} // Call the function on input change
          />
        </form>
        <button onClick={letOpen} className="navbar-toggle">
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div className={open ? "sidebar" : "close-side"}>
          <Sidebar letOpen={letOpen} />
        </div>
      </nav>
      <Outlet />
      <Footer />
    </Fragment>
  );
}

export default Navbar;
