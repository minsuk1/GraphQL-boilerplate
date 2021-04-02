import NotFoundException from '../exceptions/NotFoundException';
import {gql} from 'apollo-server-express';
import User from '../models/user';
import {logger} from '../config/winston';
import {userService} from '../service';

const {GraphQLDate, GraphQLDateTime} = require('graphql-iso-date');

const userTypeDefs = gql`
  scalar Date
  scalar DateTime
  type user {
    id: ID!
    nickname: String
    userId: String
    password: String
    createdAt: Date
    updatedAt: Date
}

`;


const userResolvers = {
  Query: {
  //   users: async (parent: any, _args: any, context: any) => {
  //       const user = await User.findAll({});
  //       if (!user) {
  //         logger.info('no user');
  //         throw new NotFoundException('no user');
  //       }
  //       return user;
  //   },
  // },

  users: async (parent: any, _args: any, context: any) => {
    const user = await User.findAll({});
    if (!user) {
      logger.info('no user');
      throw new NotFoundException('no user');
    }
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
    userTypeDefs, userResolvers,
};

