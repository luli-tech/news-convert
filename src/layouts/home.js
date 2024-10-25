import { useLoaderData, NavLink } from "react-router-dom";
import { useState } from "react";
import Pagination from "./pagination";
import SliderComponent from "./sliderComponent";

let api = process.env.REACT_APP_API_KEY;

function HomePage() {
  let id = useLoaderData();

  let [currentPage, setCurrentPage] = useState(1);
  let [itemsPerPage] = useState(20);

  let totalPages = Math.ceil(id.length / itemsPerPage);

  let startIndex = (currentPage - 1) * itemsPerPage;
  let currentItems = id.slice(startIndex, startIndex + itemsPerPage);

  let pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <h1>Home</h1>
      <SliderComponent id={id} />
      <div className="container">
        {currentItems.map((data) => (
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
                <p>{new Date(data.published).toLocaleDateString()}</p>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
      <>
        <Pagination
          handlePageChange={handlePageChange}
          currentPage={currentPage}
          pages={pages}
        />
      </>
    </>
  );
}

export default HomePage;

async function generateHash(text) {
  const msgUnit = new TextEncoder().encode(text);
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgUnit);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
  return hashHex;
}

export let loadContent = async () => {
  let res = await fetch(
    `https://newsapi.org/v2/everything?q=mexico&apiKey=${api}`
  );
  let data = await res.json();

  let final = await Promise.all(
    data?.articles?.map(async (article) => {
      let uniqueId = await generateHash(article.title);
      return {
        id: uniqueId,
        title: article.title,
        image: article.urlToImage,
        content: article.content,
        description: article.description,
        published: new Date(article.publishedAt).toLocaleDateString(),
        url: article.url,
        author: article.author,
      };
    })
  );

  return final.filter((data) => data.image);
};
