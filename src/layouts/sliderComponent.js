import React from "react";
import { Link } from "react-router-dom";

const SliderComponent = ({ id }) => {
  console.log(id);
  console.log(id);
  return (
    <div>
      <div className="slider-container">
        {id.map((data, id) => (
          <Link
            to={`/location/${data.id}`}
            key={data.id}
            className="slider-componnet-children"
          >
            <div className="slider-image">
              <img src={data.image} />
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
