import express           from 'express'
import session           from 'express-session'
import mongoose          from 'mongoose'
import graphqlHTTP       from 'express-graphql'
import passport          from 'passport'
import passportConfig    from './services/auth'
import UserModel         from './models/user'
import schema            from './schema/schema'
import cors              from 'cors'




const app = express()
mongoose.connect("mongodb://mongo/allin")

app.use(cors())
app.use(session({resave: true, saveUninitialized: true , secret: 'allin'}))
app.use(passport.initialize())
app.use(passport.session())

app.use(
    '/graphql',
    graphqlHTTP((request, response, graphQLParams) => ({
        schema,
        graphiql: true,
        context: { 
            request: request
        }
    }))
)

module.exports = app