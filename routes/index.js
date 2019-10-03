const Router = require('express').Router();
const kitsu = require('./kitsu')
const User = require('./User')
const Home = require('./Home')

Router.use('/users', User)
Router.use('/home', Home)
Router.use('/kitsu', kitsu)

module.exports = Router;