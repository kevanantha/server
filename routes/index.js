const Router = require('express').Router();

const User = require('./User')

Router.use('/users', User)

module.exports = Router;