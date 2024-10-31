// src/components/HomePage.js
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Pagination from "./pagination";
import { fetchNews } from "../store";
import SliderComponent from "./sliderComponent";

function HomePage() {
  const dispatch = useDispatch();

  const newsData = useSelector((state) => state.news.articles);
  const status = useSelector((state) => state.news.status);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 21;

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchNews());
    }
  }, [dispatch, status]);

  const totalPages = Math.ceil(newsData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = newsData.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (status === "loading") {
    return (
      <div className="outlet">
        <p>Loading...</p>
      </div>
    );
  }
  if (status === "failed") {
    return (
      <div className="outlet">
        <p>Error loading news data.</p>
      </div>
    );
  }

  return (
    <div className="outlet">
      <h1>Home</h1>
      <SliderComponent data={newsData} />
      <div className="container">
        {currentItems
          .filter((data) => data.image)
          .map((data) => (
            <NavLink
              to={`/location/${data.id}`}
              className="main-container"
              key={data.id}
            >
              <div className="img-container">
                <img src={data.image} alt={data.title} />
              </div>
              <div>
                <p className="title">{data.title}</p>
              </div>
              <div className="content-name">
                <div className="profile-container">
                  <img src={data.image} alt={data.author} />
                </div>
                <div className="target-author">
                  <p>{data.author || "Unknown Author"}</p>
                  <p>{data.published}</p>
                </div>
              </div>
            </NavLink>
          ))}
      </div>
      <Pagination
        handlePageChange={handlePageChange}
        currentPage={currentPage}
        pages={Array.from({ length: totalPages }, (_, i) => i + 1)}
      />
    </div>
  );
}

export default HomePage;
