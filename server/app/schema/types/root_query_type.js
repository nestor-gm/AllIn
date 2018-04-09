import graphql, { GraphQLObjectType, GraphQLID } from 'graphql'
import UserType                                  from './user_type'
import BetType                                   from './bet_type'
import BetService                                from '../../services/wolfram'

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
    }
  }
})

module.exports = RootQueryType