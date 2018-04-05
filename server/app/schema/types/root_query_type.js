import graphql, { GraphQLObjectType, GraphQLID } from 'graphql'
import UserType                                  from './user_type'
import BetType                                   from './bet_type'
import BetService                                from '../../services/wolfram'

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      resolve(parentValue, args, req) {
        return req.user
      }
    },
  }
})

module.exports = RootQueryType