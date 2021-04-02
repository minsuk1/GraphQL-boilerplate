import {gql} from 'apollo-server-express';

const typeDefs = gql`
  type Query {
    hello: String!
    users: [user]
    users(id: Int): user
    comments: [comment]
  }
`;

export {typeDefs};
