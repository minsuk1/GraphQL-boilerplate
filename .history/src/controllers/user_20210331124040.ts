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

// const Userresolvers = {
//     Query: {
//       users: async (parent: any, _args: any, context: any) => {
//        try {
//           const user = await User.findAll({});
//           return user;
//        } catch (error) {
//         throw new Error(error);
//        }
//       },
//     },
//   };


// const Userresolvers = {
//   Query: {
//     users: async (parent: any, _args: any, context: any) => {
//         const user = await User.findAll({});
//         if (!user) {
//           throw new NotFoundException('no user');
//         }
//         return user;
//     },
//   },
// };


const Userresolvers = {
  Query: {
    users: async (parent: any, _args: any, context: any) => {
        const user = await UserService.getUserInfo();
        return user;
    },
  },

  Query: {
    users: async (parent: any, _args: any, context: any) => {
        const user = await UserService.getUserInfo();
        return user;
    },
  },

};

  export {
    UsertypeDefs, Userresolvers,
};

