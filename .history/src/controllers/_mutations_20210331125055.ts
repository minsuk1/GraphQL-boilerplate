import {gql} from 'apollo-server-express';

const typeDefs = gql`
    type Mutation {
        insertUsers(
            id: Int
            nickname: String
            userId: String
            password: String
            createdAt: String
            updatedAt: String
          ): Equipment
    }
`;


export default typeDefs;
