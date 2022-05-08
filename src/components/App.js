/** @format */

import Home from "./Home";
import React from "react";
import { useGenre } from "../hook/useGenre";

const App = () => {
  const { error, loading, data } = useGenre();
  if (loading) return <div>spinner...</div>;
  if (error) return <div> something is wrong ...</div>;
  else {
    return (
      <div>
        <Home values={data.reference_list.values} />
      </div>
    );
  }
};
export default App;
