import {gql, useQuery} from '@apollo/client';

const CardList = gql`
  query {
    cards {
      id
      name
    }
  }
`;

export const useCardList = () => {
  return useQuery(CardList);
};
