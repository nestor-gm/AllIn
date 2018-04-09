import graphql,  { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLID } from 'graphql'

const UserType = new GraphQLObjectType({
  name: 'UserType',
  fields: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    password: { type: GraphQLString },
    token: { type: GraphQLString },
    role: { type: GraphQLInt },
    nBets: { type: GraphQLInt },
    wBets: { type: GraphQLInt }
  }
})

module.exports = UserType