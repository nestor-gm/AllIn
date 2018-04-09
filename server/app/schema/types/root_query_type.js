import graphql, { GraphQLObjectType, GraphQLID, GraphQLList} from 'graphql'
import UserType                                              from './user_type'
import BetType                                               from './bet_type'
import BetService                                            from '../../services/wolfram'
import AuthService                                           from '../../services/auth'
import User                                                  from '../../models/user.js'

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
    getAllUsers: {
      type:  new GraphQLList(UserType),
      resolve(parentValue, args, context) {
        return User.find({})
      }
    }
  }
})

module.exports = RootQueryType