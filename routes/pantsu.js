const Router = require('express').Router();
const PantsuController = require('../controllers/Pantsu');

// * Query Fields = {q: any, resolution: 540p; 720; 1080p}
Router.get('/', PantsuController.search)

module.exports = Router;