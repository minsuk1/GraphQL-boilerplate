import {gql} from 'apollo-server-express';

const muTypeDefs = gql`
    type Mutation {
        insertUsers(
            id: Int
            nickname: String
            userId: String
            password: String
            createdAt: String
            updatedAt: String
          ): user
    }
`;


export {
    muTypeDefs,
};
