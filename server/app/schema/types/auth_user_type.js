import graphql,  { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLID } from 'graphql'

const AuthUserType = new GraphQLObjectType({
  name: 'AuthUserType',
  fields: {
    token: { type: GraphQLString }
  }
})

module.exports = AuthUserType