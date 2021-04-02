import {gql} from 'apollo-server-express';

const muTypeDefs = gql`
    type Mutation {
        insertUsers(
            id: ID
            nickname: String
            userId: String
            password: String
            createdAt: String
            updatedAt: Date
          ): user
    }
`;


export {
    muTypeDefs,
};
