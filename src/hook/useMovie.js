/** @format */
import { useQuery, gql } from "@apollo/client";

const GET_Movie = gql`
  query {
    movie_by_genre(value: { genre: "Action" }, orderBy: [year_DESC]) {
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
export const useMovie = () => {
  const { error, loading, data } = useQuery(GET_Movie);

  return {
    error,
    loading,
    data,
  };
};
