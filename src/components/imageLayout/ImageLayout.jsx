import React from "react";
import "./ImageLayout.css";

export default function ImageLayout({ images }) {
  return (
    <section className="image-layout">
      <div className="container">
        <div className="image-wrapper">
          {images.length > 0 ? (
            images.map((image, index) => (
              <img
                key={index}
                src={image.urls.regular}
                alt={image.alt_description}
                loading="lazy"
              />
            ))
          ) : (
            <p>There is no images</p>
          )}
        </div>
      </div>
    </section>
  );
}
