/** @format */

import React from "react";

const Card = ({ movie }) => {
  return (
    <div>
      <h3>{movie.title}</h3>
      <h3>{movie.duration}</h3>
      <video className="video">
        <source src={movie.thumbnail} type="video/mp4" />
      </video>
    </div>
  );
};
export default Card;
