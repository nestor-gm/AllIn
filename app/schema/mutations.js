import graphql from 'graphql'
import UserType from './types/user_type'
import AuthService from '../services/auth'

const { GraphQLObjectType, GraphQLString, GraphQLInt } = graphql

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    signup: {
      type: UserType,
      args: {
        name: { type: GraphQLString },
        password: { type: GraphQLString },
        nBets: { type: GraphQLInt },
        wBets: { type: GraphQLInt }
      },
      resolve(parentValue, { name, password }, req) {
        return AuthService.signup({ name, password, req })
      }
    },
    logout: {
      type: UserType,
      resolve(parentValue, args, req) {
        const { user } = req
        req.logout()
        return user
      }
    },
    login: {
      type: UserType,
      args: {
        name: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve(parentValue, { name, password }, req) {
        return AuthService.login({ name, password, req })
      }
    }
  }
})

module.exports = mutation