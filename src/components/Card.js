/** @format */

import React from "react";

const Card = ({ movie }) => {
  console.log(movie);
  return (
    <div>
      <h2> {movie.title} </h2> {movie.title}
      <video>
        <source src={movie.thumbnail} />
      </video>
    </div>
  );
};
export default Card;
