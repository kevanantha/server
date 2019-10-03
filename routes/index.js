const Router = require('express').Router();
const kitsu = require('./kitsu')
const User = require('./User')
const Home = require('./Home')

Router.use('/users', User)
<<<<<<< HEAD
Router.use('/home', Home)
=======
Router.use('/kitsu', kitsu)
>>>>>>> added kitsu

module.exports = Router;