import React from "react";
import { Link } from "react-router-dom";

const SliderComponent = ({ newsData }) => {
  return (
    <div>
      <div className="slider-container">
        {newsData?.map((data, id) => (
          <Link
            to={`/location/${data.id}`}
            key={data.id}
            className="slider-componnet-children"
          >
            <div className="slider-image">
              <img src={data.urlToImage} alt="slide-image" />
            </div>
            <div className="slider-component-inner-text">
              <p className="slidertitle">{data.title}</p>
              <p className="sliderauthor">Author:{data.author}</p>
              <p className="sliderpublish">{data.published}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SliderComponent;
