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
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e, category) => {
    if (e) e.preventDefault();

    const searchValue = category || searchQuery;

    if (searchValue) {
      dispatch(setSearch(searchValue));
      dispatch(fetchNews(searchValue));
    }

    if (!category) {
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
            placeholder="search-news..."
            className="navbar-search"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </form>
        <button onClick={letOpen} className="navbar-toggle">
          <FontAwesomeIcon className="fabars" icon={faBars} />
        </button>
      </nav>
      <div>
        <Sidebar
          open={open}
          letOpen={letOpen}
          handleSearchSubmit={handleSearchSubmit} // Pass the submit function here
        />
      </div>
      <Outlet className="outlet" />
      <Footer />
    </Fragment>
  );
}

export default Navbar;
