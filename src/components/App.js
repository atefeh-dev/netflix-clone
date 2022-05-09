/** @format */

import Home from "./Home";
import React from "react";
import { useMovie } from "../hook/useMovie";

const App = () => {
  const { error, loading, data } = useMovie();
  if (loading) return <div>spinner...</div>;
  if (error) return <div> something is wrong ...</div>;
  else {
    return (
      <div>
        <Home values={data.movie_by_genre.values} />
      </div>
    );
  }
};
export default App;
