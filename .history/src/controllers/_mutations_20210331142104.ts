import {gql} from 'apollo-server-express';

const muTypeDefs = gql`
    type Mutation {
        insertUsers(
            id: ID
            nickname: String
            userId: String
            password: String
            createdAt: Date
            updatedAt: Date
          ): user
    }
`;


export {
    muTypeDefs,
};
