import graphql, { GraphQLObjectType, GraphQLID, GraphQLList, GraphQLString} from 'graphql'
import UserType                                                             from './user_type'
import BetType                                                              from './bet_type'
import BetService                                                           from '../../services/wolfram'
import AuthService                                                          from '../../services/auth'
import User                                                                 from '../../models/user.js'

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      resolve(parentValue, args, context) {
        return context.request.user
      }
    },
    bet: {
      type: BetType,
      resolve(parentValue, args, req) {
        return BetService.coinFlip()
      }
    },
    getUser: {
      type: UserType,
      args: {
        name: { type: GraphQLString }
      }, 
      resolve(parentValue, { name }, context) {
        return User.findOne({name: name})
      }
    },
    getAllUsers: {
      type:  new GraphQLList(UserType),
      resolve(parentValue, args, context) {
        return AuthService.getAllUsers(context)
      }
    }
  }
})

module.exports = RootQueryType