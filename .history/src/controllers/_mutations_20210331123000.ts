import {gql} from 'apollo-server-express';

const typeDefs = gql`
    type Mutation {
      deleteEquipment(id: String): Equipment
      deleteSupply(id: String): Supply
    }
`


export {typeDefs};