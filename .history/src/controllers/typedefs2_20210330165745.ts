import {gql} from 'apollo-server-express';

const test1 = gql`
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

export default test2;