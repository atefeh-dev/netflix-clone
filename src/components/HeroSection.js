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
      <div className="top">
        <div className="video-container">
          <video className="hero-video" muted controls autoPlay={true} loop>
            <source src={movie.thumbnail} type="video/mp4" />
          </video>
          <div className="info-section">
            <h1>{movie.title}</h1>
            <p className="hero-blurb">{movie.synopsis}</p>
            <div className="button-section">
              <div className="button play">
                Play
                <div style={{ paddingLeft: "5px" }}>
                  <i class="fa-solid fa-circle-play"></i>
                </div>
              </div>
              <div className="button more">
                More info
                <div style={{ paddingLeft: "5px" }}>
                  <i className="fas fa-info-circle"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default HeroSection;
