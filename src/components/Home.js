/** @format */
import React from "react";
const Home = ({ values }) => {
  return (
    <div>
      {values.map((value, index) => {
        return <p key={index}>{value.value}</p>;
      })}
    </div>
  );
};

export default Home;
