const graphql = require('graphql')
const { GraphQLObjectType, GraphQLID } = graphql
import UserType      from './user_type'



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