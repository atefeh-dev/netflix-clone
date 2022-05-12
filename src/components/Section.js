/** @format */
import React, { useState, useEffect } from "react";
import { useMovie } from "../hook/useMovie";
import Card from "./Card";

const Section = ({ genre }) => {
  const [pageState, setPageState] = useState(null);
  const { error, loading, data, refetch } = useMovie(genre, pageState);
  if (error) return <div>something is wrong...</div>;
  if (loading) return <div>loading...</div>;
  return (
    <div>
      <h2>{genre}</h2>
      <div className="movie_section">
        {data.movie_by_genre.values.map((movie, index) => {
          return <Card movie={movie} key={index} />;
        })}
        <div>
          <button
            className="more-button"
            onClick={() => {
              setPageState(data.movie_by_genre.pageState);
              refetch();
            }}>
            more ...
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section;
