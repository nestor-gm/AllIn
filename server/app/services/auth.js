import mongoose from 'mongoose'
import passport from 'passport'
import User     from '../models/user.js'
import jwt      from './jwt.js'
const LocalStrategy = require('passport-local').Strategy



passport.serializeUser((user, done) => {
  done(null, user.id)
})


passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user)
  })
})


passport.use(new LocalStrategy({ usernameField: 'name' }, (name, password, done) => {
  User.findOne({ name: name.toLowerCase() }, (err, user) => {
    if (err) { return done(err) }
    if (!user) { return done(null, false, 'Invalid Credentials3') }
    user.comparePassword(password, (err, isMatch) => {
      if (err) { return done(err) }
      if (isMatch) {
        return done(null, user)
      }
      return done(null, false, 'Invalid credentials.')
    })
  })
}))


function signup({ name, password, role,  context }) {
  const user = new User({ name, password, role })
  if (!name || !password) { throw new Error('You must provide a name and password.') }

  return User.findOne({ name })
    .then(existingUser => {
      if (existingUser) { throw new Error('name in use') }
      return user.save()
    })
    .then(user => {
      return new Promise((resolve, reject) => {
        context.request.logIn(user, (err) => {
          if (err) { reject(err) }
          resolve(user)
        })
      })
    })
}


function login({ name, password, context }) {
  return new Promise((resolve, reject) => {
    passport.authenticate('local', (err, user) => {
      if (!user) { reject('Invalid credentials.') }
      var token = jwt.createToken(user)
      User.findOneAndUpdate({name: name}, {$set: {token: token}}, function (err, dox) {})
      let string = { token: token, role: user.role }
      context.request.login(user, () => resolve(string))
    })({ body: { name, password } })
  })
}

async function update({name, nBets, wBets, context}) {

   let token = context.request.headers.authorization 
   if (token == 'null' )  throw new Error('Token no existe')
   let decode = await jwt.decodeToken(token)
   let user = await User.findOne({name: decode})
   if (user == null ) throw new Error('Usuario no existe')
   let result = await User.findOne({name: decode, token: token})
   if (result == null ) throw new Error('Token no coinciden')

  return new Promise((resolve, reject) => {
      User.findOneAndUpdate({name: name}, {$set: {nBets: nBets, wBets:wBets}}, function (err, user) {
        resolve(user)
      })
  })

}

async function getAllUsers(context) {
  return User.find({})
}

async function deleteUser( {name, context})  {

  let token = context.request.headers.authorization 
  if (token == 'null' )  throw new Error('Token no existe')
  let decode = await jwt.decodeToken(token)
  let user = await User.findOne({name: decode})
  if (user == null ) throw new Error('Usuario no existe')
  let result = await User.findOne({name: decode, token: token})
  if (result == null ) throw new Error('Token no coinciden')
  let user_delete = await User.findOne({name: name})
  if (user_delete.role > user.role )  throw new Error('No tienes permisos')
  return await User.remove({name:name})
  
}

module.exports = { signup, login, update, getAllUsers, deleteUser} 
