import React from "react";
import "./css/gallery.css";

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollPosition: 0,
    };
  }

  scrollImages = (scrollOffset) => {
    const container = document.querySelector(".image-list");
    container.scrollBy({ left: scrollOffset, behavior: "smooth" });
  };

  render() {
    return (
      <div className="gallery-container">
        <h1 className="text-center mb-4">Gallery</h1>
        <div className="gallery-wrapper">
          {/* Left scroll button */}
          <button
            className="scroll-button left"
            onClick={() => this.scrollImages(-200)}
          >
            &#10094;
          </button>

          {/* Image list container */}
          <div className="image-list">
            {/* Dynamically rendering cards */}
            {[...Array(12)].map((_, index) => (
              <div className="card" key={index}>
                <img
                  src="https://wowslider.com/sliders/demo-93/data1/images/lake.jpg"
                  className="d-block w-100"
                  alt={`Gallery item ${index + 1}`}
                />
              </div>
            ))}
          </div>

          {/* Right scroll button */}
          <button
            className="scroll-button right"
            onClick={() => this.scrollImages(200)}
          >
            &#10095;
          </button>
        </div>
      </div>
    );
  }
}

export default Gallery;
