/** @format */
import { useQuery, gql } from "@apollo/client";

const GET_Genre = gql`
  query GetGere {
    genre_list {
      values {
        value
      }
    }
  }
`;
export const useGenre = (id) => {
  const { error, loading, data } = useQuery(GET_Genre);

  return {
    error,
    loading,
    data,
  };
};
