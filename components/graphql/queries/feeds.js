import {gql} from 'apollo-boost';

export const GET_FEEDS_QUERY = gql`
  query feed {
    feed {
      id
      content
      author
    }
  }
`;
