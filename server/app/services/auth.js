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
      let string = { token }
      context.request.login(user, () => resolve(string))
    })({ body: { name, password } })
  })
}

function update({name, nBets, wBets, req}) {
  return new Promise((resolve, reject) => {
  User.findOneAndUpdate({name: name}, {$set: {nBets: nBets, wBets:wBets}}, function (err, user) {
      resolve(user)
  })
  })


}



module.exports = { signup, login, update }
