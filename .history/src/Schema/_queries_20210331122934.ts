import {gql} from 'apollo-server-express';

const typeDefs = gql`
  type Query {
    hello: String!
    users: [user]
    comments: [comment]
  }
`;

export {typeDefs};
