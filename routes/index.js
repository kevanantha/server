const Router = require('express').Router();
const kitsu = require('./kitsu')
const User = require('./User')
const Home = require('./Home')
const pantsu = require('./pantsu')

Router.use('/users', User)
Router.use('/home', Home)
Router.use('/kitsu', kitsu)
Router.use('/pantsu', pantsu)

module.exports = Router;