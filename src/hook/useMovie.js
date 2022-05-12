/** @format */
import { useQuery, gql } from "@apollo/client";

const GET_Movie = gql`
  query GET_Movie($genre: String!, $pageState: String) {
    movie_by_genre(
      value: { genre: $genre }
      orderBy: [year_DESC]
      options: { pageSize: 3, pageState: $pageState }
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
export const useMovie = (genre, pageState) => {
  const { error, loading, data } = useQuery(GET_Movie, {
    variables: {
      genre,
      pageState,
    },
  });
  return {
    error,
    loading,
    data,
  };
};
