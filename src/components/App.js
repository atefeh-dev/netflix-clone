/** @format */

import Section from "./Section";
import React from "react";
import { useGenre } from "../hook/useGenre";

const App = () => {
  const incrementLimit = 4;
  const { error, loading, data } = useGenre(incrementLimit);
  if (loading) return <div>spinner...</div>;
  if (error) return <div> something is wrong ...</div>;
  else {
    return (
      <div className="Container">
        {data.genre_list.values.map((genre, index) => {
          return <Section genre={genre.value} key={index} />;
        })}
      </div>
    );
  }
};
export default App;
