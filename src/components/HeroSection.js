/** @format */

import { useState, useEffect } from "react";
import { useMovie } from "../hook/useMovie";

const HeroSection = () => {
  const pageState = null;
  const genre = "Sci-Fi";
  const { error, loading, data } = useMovie(genre, pageState);
  if (error) return <div>something is wrong...</div>;
  if (loading) return <div>loading...</div>;
  if (data) {
    const movies = data.movie_by_genre.values;
    const movie = movies[Math.floor(Math.random() * movies.length)];
    console.log(movie);

    return (
      <>
        <div className="hero">
          <video className="hero-video" muted controls autoPlay={true} loop>
            <source src={movie.thumbnail} type="video/mp4" />
          </video>
          <div className="info-section">
            <h3 className="hero-blurb">{movie.synopsis}</h3>
            <div className="button-section">
              <div className="button play">
                <span>
                  <i className="fas fa-play"></i>
                </span>
                Play
              </div>
              <div className="button more">
                <span>
                  <i className="fas fa-info-circle"></i>
                </span>
                More info
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default HeroSection;
