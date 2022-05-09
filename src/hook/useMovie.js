/** @format */
import { useQuery, gql } from "@apollo/client";

const GET_Movie = gql`
  query GET_Movie($genre: String!) {
    movie_by_genre(value: { genre: $genre }, orderBy: [year_DESC]) {
      values {
        genre
        title
        thumbnail
        duration
        synopsis
      }
    }
  }
`;
export const useMovie = (genre) => {
  const { error, loading, data } = useQuery(GET_Movie, {
    variables: {
      genre,
    },
  });
  return {
    error,
    loading,
    data,
  };
};
