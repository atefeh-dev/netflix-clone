/** @format */
import { useQuery, gql } from "@apollo/client";

const GET_Genre = gql`
  query GetGere($limit: Int!) {
    genre_list(value: { lable: "genre" }, options: { limit: $limit }) {
      values {
        value
      }
    }
  }
`;
export const useGenre = (limit) => {
  const { error, loading, data } = useQuery(GET_Genre, {
    variables: {
      limit,
    },
  });

  return {
    error,
    loading,
    data,
  };
};
