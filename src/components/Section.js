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
      <h2 className="title-genre">{genre}</h2>
      <div className="movie-section">
        {data.movie_by_genre.values.map((movie, index) => {
          return <Card movie={movie} key={index} />;
        })}
        <div
          className="more-button"
          onClick={() => {
            setPageState(data.movie_by_genre.pageState);
            refetch();
          }}>
          <svg fill="currentColor" viewBox="0 0 16 16">
            <path
              fillRule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Section;
