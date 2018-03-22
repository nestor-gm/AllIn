import graphql       from 'graphl'
import UserType      from './user_type'

const { GraphQLObjectType, GraphQLID } = graphql


const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      resolve(parentValue, args, req) {
        return req.user
      }
    }
  }
})

module.exports = RootQueryType