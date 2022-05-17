/** @format */

import React, { useState } from "react";

const Card = ({ movie }) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <div
      className="card"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}>
      {!isShown && (
        <video className="video" controls>
          <source src={movie.thumbnail} type="video/mp4" />
        </video>
      )}

      {isShown && (
        <div className="video-container">
          <video className="video" controls autoPlay={true} loop>
            <source src={movie.thumbnail} type="video/mp4" />
          </video>
          <div className="overlay">
            <h3>{movie.title}</h3>
            <h4>{movie.duration}</h4>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
