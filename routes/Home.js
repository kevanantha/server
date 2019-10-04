const Router = require('express').Router();
const HomeController = require('../controllers/Home');

Router.get('/', HomeController.upcoming)
Router.get('/detail/:id', HomeController.detail)

module.exports = Router;
