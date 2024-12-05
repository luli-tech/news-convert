import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SliderComponent = ({ currentItems }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = currentItems.length;
  const maxVisibleDots = 4; // Set max visible dots to 4

  // Function to go to the next slide
  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  }

  // Use effect to automatically scroll
  useEffect(() => {

    const interval = setInterval(goToNextSlide, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, [totalItems, goToNextSlide]);

  // Calculate the range of dots to display
  const startDot = Math.max(0, currentIndex - Math.floor(maxVisibleDots / 2));
  const endDot = Math.min(totalItems, startDot + maxVisibleDots);

  // Adjust starting dot if nearing the end of the list
  const visibleDots = currentItems.slice(
    Math.max(0, endDot - maxVisibleDots),
    endDot
  );

  // Function to handle dot click
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slider-container">
      {currentItems?.map((data, index) => (
        <Link
          to={`/location/${data.id}`}
          key={data.id}
          className={`slider-component-child ${index === currentIndex ? "active" : ""
            }`}
        >
          <div className="slider-image">
            <img src={data.image} alt={data.title} />
            <div className="slider-text-overlay">
              <p className="slider-title">{data.title}</p>
              <p className="slider-author">
                Author: {data.author || "Unknown Author"}
              </p>
              <p className="slider-publish">{data.published}</p>
            </div>
          </div>
        </Link>
      ))}

      {/* Dots Indicators (show up to 4) */}
      <div className="dots-container">
        {visibleDots.map((_, index) => (
          <div
            key={startDot + index}
            className={`dot ${startDot + index === currentIndex ? "active-dot" : ""
              }`}
            onClick={() => handleDotClick(startDot + index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default SliderComponent;
