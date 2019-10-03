const Router = require('express').Router();
const HomeController = require('../controllers/Home');

Router.get('/', HomeController.upcoming)

module.exports = Router;