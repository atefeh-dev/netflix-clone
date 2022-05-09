/** @format */

import React from "react";

const Card = ({ movie }) => {
  console.log(movie);
  return (
    <div>
      <h3>{movie.title}</h3>
      <video className="video">
        <source src={movie.thumbnail} type="video/mp4" />
      </video>
      <p>{movie.synopsis}</p>
    </div>
  );
};
export default Card;
