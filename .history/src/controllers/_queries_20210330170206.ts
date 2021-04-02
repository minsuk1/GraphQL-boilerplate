import {gql} from 'apollo-server-express';

const typedefs = gql`
  type Query {
    hello: String!
    users: [user]
  }
`;

export default typedefs;
