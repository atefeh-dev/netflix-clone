/** @format */

import React from "react";

const Card = ({ movie }) => {
  return (
    <div className="card">
      <video className="video">
        <source src={movie.thumbnail} type="video/mp4" />
      </video>
    </div>
  );
};
export default Card;
