const axios = require('axios')

const kitsu = axios.create({
    baseURL: 'https://kitsu.io/api/edge/anime',
    timeout: 5000
})

const pantsu = axios.create({
    baseURL: 'https://nyaa.pantsu.cat/api/search/',
    timeout: 10000
})

module.exports = { kitsu, pantsu }
