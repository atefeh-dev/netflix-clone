/** @format */
import React from "react";
const Home = ({ values }) => {
  console.log("hi");
  return (
    <div>
      {values.map((value, index) => {
        return <p key={index}>{value.value}</p>;
      })}
    </div>
  );
};

export default Home;
