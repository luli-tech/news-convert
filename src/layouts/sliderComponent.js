import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

const SliderComponent = ({ currentItems }) => {
  return (
    <Carousel indicators>
      {currentItems
        ?.filter((data) => data.image)
        .map((data, index) => (
          <Carousel.Item key={index}>
            <Link to={`/location/${data.id}`}>
              <div className="carousel-image-wrapper">
                <img
                  className="d-block w-100"
                  src={data.image}
                  alt={`Slide ${index + 1}`}
                  style={{
                    maxHeight: "50vh",
                    minHeight: "40vh",
                    objectFit: "cover",
                  }}
                />
                <div className="carousel-gradient-overlay"></div>
              </div>
            </Link>
            <Carousel.Caption>
              <h5 className="carousel-title">{data.title}</h5>
              <p className="carousel-description">{data.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      <style jsx>{`
        .carousel-image-wrapper {
          position: relative;
        }

        .carousel-gradient-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0.5),
            rgba(255, 255, 255, 0.8)
          );
          z-index: 1;
        }

        .carousel-caption {
          position: absolute;
          bottom: 20px;
          left: 10%;
          right: 10%;
          color: #333; /* Dark color for contrast against white */
          z-index: 2;
          text-shadow: 0 1px 4px rgba(255, 255, 255, 0.7);
        }

        .carousel-title {
          font-size: 1.8rem;
          font-weight: bold;
        }

        .carousel-description {
          font-size: 1.1rem;
        }

        /* Dot indicators styles */
        .carousel-indicators {
          position: absolute;
          bottom: 10px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 3;
        }

        .carousel-indicators .active {
          background-color: #333; /* Dark color for active dot */
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }

        .carousel-indicators li {
          background-color: #ccc; /* Light gray for inactive dots */
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .carousel-title {
            font-size: 1.4rem;
          }

          .carousel-description {
            font-size: 0.9rem;
          }

          .carousel-caption {
            bottom: 10px;
          }
        }
      `}</style>
    </Carousel>
  );
};

export default SliderComponent;
