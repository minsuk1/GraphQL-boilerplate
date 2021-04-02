import {gql} from 'apollo-server-express';

const Usertypedefs = gql`
  type user {
    id: Int
    nickname: String
    userId: String
    password: String
    createdAt: String
    updatedAt: String
}

`;

export default Usertypedefs;
