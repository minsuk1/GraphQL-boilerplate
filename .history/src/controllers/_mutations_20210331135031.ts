import {gql} from 'apollo-server-express';

const muTypeDefs = gql`
    type Mutation {
        insertUsers(
            id: ID
            nickname: String
            userId: String
            password: String
            createdAt: DateTime
            updatedAt: DateTime
          ): user
    }
`;


export {
    muTypeDefs,
};
