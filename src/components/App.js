/** @format */

import Card from "./Home";
import React from "react";
import { useGenre } from "../hook/useGenre";
const App = () => {
  const { error, loading, data } = useGenre();
  console.log(error, loading, data);
  if (loading) console.log(data);
  return (
    <div>
      <Card />
    </div>
  );
};
export default App;
