import graphql,  { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLID } from 'graphql'

const UserType = new GraphQLObjectType({
  name: 'UserType',
  fields: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    password: { type: GraphQLString },
    nBets: { type: GraphQLInt },
    wBets: { type: GraphQLInt }
  }
})

module.exports = UserType