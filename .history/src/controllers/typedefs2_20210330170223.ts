import {gql} from 'apollo-server-express';

const test2 = gql`
  type comment {
    id: Int
    content: String
    createdAt: String
    updatedAt: String
    UserId: Int
}

`;

export default test2;
