// src/components/HomePage.js
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Pagination from "./pagination";
import { fetchNews } from "../store";
import SliderComponent from "./sliderComponent";

function HomePage() {
  const dispatch = useDispatch();

  // Fetch articles data and status from Redux store
  const newsData = useSelector((state) => state.news.articles);
  const status = useSelector((state) => state.news.status);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  // Dispatch fetchNews on component mount to load news data
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchNews());
    }
  }, [dispatch, status]);

  // Pagination calculations
  const totalPages = Math.ceil(newsData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = newsData.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error loading news data.</p>;

  return (
    <>
      <h1>Home</h1>
      <SliderComponent data={newsData} />
      <div className="container">
        {currentItems
          .filter((data) => data.urlToImage)
          .map((data) => (
            <NavLink
              to={`/location/${data.id}`}
              className="main-container"
              key={data.id}
            >
              <div className="img-container">
                <img src={data.urlToImage} alt={data.title} />
              </div>
              <div>
                <p className="title">{data.title}</p>
              </div>
              <div className="content-name">
                <div className="profile-container">
                  <img src={data.urlToImage} alt={data.author} />
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
    </>
  );
}

export default HomePage;
