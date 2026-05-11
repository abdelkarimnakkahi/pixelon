import React from "react";
import "./ImageLayout.css";

export default function ImageLayout({ images }) {
  return (
    <section className="image-layout">
      <div className="container">
        <div className="image-wrapper">
          {images.length > 0 ? (
            images.map((image) => (
              <div key={image.id} className="image-card">
                <img
                  className="main-image"
                  src={image.urls.regular}
                  alt={image.alt_description}
                  loading="lazy"
                />
                <div className="owner-wrapper">
                  <div className="owner-info">
                    <div className="owner-avatar">
                      <img
                        className="avatar-image"
                        src={image.user.profile_image.medium}
                        alt={`${image.user.first_name} ${image.user.last_name}`}
                      />
                    </div>
                    <div className="owner-name">
                      <a
                        href={image.links.html}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {" "}
                        {image.user.first_name} {image.user.last_name}
                      </a>
                    </div>
                  </div>
                  <div className="image-likes">
                    <p>{image.likes} Likes</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>There is no images</p>
          )}
        </div>
      </div>
    </section>
  );
}
