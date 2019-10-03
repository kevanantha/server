const axios = require('axios')

const kitsu = axios.create({
    baseURL: 'https://kitsu.io/api/edge/anime',
    timeout: 5000
})

module.exports = { kitsu }