/** @format */
import { useQuery, gql } from "@apollo/client";

const GET_Movie = gql`
  query GET_Movie($genre: String!) {
    movie_by_genre(
      value: { genre: $genre }
      orderBy: [year_DESC]
      options: { pageSize: 5 }
    ) {
      values {
        genre
        title
        thumbnail
        duration
        synopsis
      }
      pageState
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
