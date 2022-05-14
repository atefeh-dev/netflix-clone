/** @format */

import Section from "./Section";
import React, { useState } from "react";
import { useGenre } from "../hook/useGenre";

const App = () => {
  const incrementLimit = 4;
  const [limit, setLimit] = useState(incrementLimit);
  const { error, loading, data } = useGenre(limit);
  if (loading) return <div>spinner...</div>;
  if (error) return <div> something is wrong ...</div>;
  else {
    console.log(limit);
    return (
      <div className="Container">
        {data.genre_list.values.map((genre, index) => {
          return <Section genre={genre.value} key={index} />;
        })}
        <div
          className="end-section"
          onMouseEnter={() => {
            setLimit(limit + incrementLimit);
          }}
        />
      </div>
    );
  }
};
export default App;
