import {gql} from 'apollo-server-express';

const typedefs2 = gql`
  type Query {
    comments: [comment]
  }

  type comment {
    id: Int
    content: String
    createdAt: String
    updatedAt: String
    UserId: Int
}

`;

export default typedefs2;
