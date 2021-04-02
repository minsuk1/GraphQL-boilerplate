import * as UserService from '../service/UserService';
import NotFoundException from '../exceptions/NotFoundException';
import {gql} from 'apollo-server-express';
import User from '../models/user';

const UsertypeDefs = gql`
  type user {
    id: Int
    nickname: String
    userId: String
    password: String
    createdAt: String
    updatedAt: String
}

`;


const Userresolvers = {
  Query: {
    users: async (parent: any, _args: any, context: any) => {
        const user = await User.findAll({});
        return user;
    },
  },

  Mutation: {
    insertUsers: async (parent: any, _args: any) => {
       const user = await User.create(_args);
        return user;
    },
  },

};

  export {
    UsertypeDefs, Userresolvers,
};

