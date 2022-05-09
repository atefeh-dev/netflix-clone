/** @format */

import Section from "./Section";
import React from "react";
import { useGenre } from "../hook/useGenre";

const App = () => {
  const { error, loading, data } = useGenre();
  if (loading) return <div>spinner...</div>;
  if (error) return <div> something is wrong ...</div>;
  else {
    return (
      <div className="Container">
        {data.reference_list.values.map((genre) => {
          return <Section genre={genre.value} />;
        })}
      </div>
    );
  }
};
export default App;
