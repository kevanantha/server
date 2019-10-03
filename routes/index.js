const Router = require('express').Router();

const User = require('./User')
const Home = require('./Home')

Router.use('/users', User)
Router.use('/home', Home)

module.exports = Router;