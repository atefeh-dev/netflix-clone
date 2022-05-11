/** @format */
import React from "react";
import { useMovie } from "../hook/useMovie";
import Card from "./Card";

const Section = ({ genre }) => {
  const { error, loading, data } = useMovie(genre);
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
          <button className="more-button">more ...</button>
        </div>
      </div>
    </div>
  );
};

export default Section;
