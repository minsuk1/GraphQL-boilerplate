import {gql} from 'apollo-server-express';

const muTypeDefs = gql`
    type Mutation {
        insertUsers(
            id: ID
            nickname: String
            userId: String
            password: String
            createdAt: String
            updatedAt: "1992-10-09T00:00:00Z"
          ): user
    }
`;


export {
    muTypeDefs,
};
