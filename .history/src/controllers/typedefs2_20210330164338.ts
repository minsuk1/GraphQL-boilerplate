import {gql} from 'apollo-server-express';

const typedefs = gql`
  type Query {
    comments: [comment]
  }

  type comment {
    id: Int
    content: String
    createdAt: String
    updatedAt: String
    UserId: String
}

`;

export default typedefs;
