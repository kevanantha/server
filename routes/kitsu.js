const Router = require('express').Router();
const KitsuController = require('../controllers/Kitsu');

// * Query Field: {season: "winter" || "summer" || "spring" || "fall", year: yyyy}
Router.get('/seasons', KitsuController.seasonal)
// * Episodes

// * Get Anime by ID
Router.get('/anime/:id', KitsuController.detail)

Router.get('/episodes/:id', KitsuController.episodes)
// * Query Field {q: 'any' }
Router.get('/', KitsuController.search)

module.exports = Router;