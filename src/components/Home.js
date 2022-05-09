/** @format */
import React from "react";
import Card from "./Card";
const Home = ({ values }) => {
  return (
    <div className="movie_section">
      {values.map((value, index) => {
        return <Card movie={value} key={index} />;
      })}
    </div>
  );
};

export default Home;
