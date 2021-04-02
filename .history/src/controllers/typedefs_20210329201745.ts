import {gql} from 'apollo-server-express';

const typedefs = gql`
  type Query {
    hello: String!
    users: [user]
  }

  type Team {
    id: Int
    nickname: String
    userId: String
    password: String
    createdAt: String
    updatedAt: String
}

`;

export default typedefs;
