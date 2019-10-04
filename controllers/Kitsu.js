const { kitsu } = require('../config/axios')

class KitsuController {
    static search(req, res, next) {
        const { q } = req.query
        kitsu.get(`?filter[text]=${q}`)
            .then(({ data }) => {
                res.status(200).json(data.data)
            }).catch(next);
    }

    static seasonal(req, res, next) {
        let { season, year } = req.query
        if (!year) year = new Date().getFullYear()
        switch (season) {
            case "winter":
                break;
            case "summer":
                break;
            case "spring":
                break;
            case "fall":
                break;
            default:
                return next({ status: 400, message: `Accepted Value for Season is "winter", "summer", "spring", "fall"` })
        }
        kitsu.get(`?filter[season]=${season}&filter[seasonYear]=${year}&sort=-popularityRank`)
            .then(({ data }) => {
                res.status(200).json(data.data)
            }).catch(next);
    }

    static episodes(req, res, next) {
        const { id } = req.params
        kitsu.get(`/${id}/episodes`)
            .then(({ data }) => {
                res.status(200).json(data.data)
            }).catch(next);
    }

    static detail(req, res, next) {
        const { id } = req.params
        kitsu.get(`/${id}`)
            .then(({ data }) => {
                res.status(200).json(data.data)
            }).catch(next);
    }

    static reviews(req, res, next) {
        const { id } = req.params
        kitsu.get(`/${id}/reviews?sort=-updatedAt`)
            .then(({ data }) => {
                res.status(200).json(data.data)
            }).catch(next);
    }
}

module.exports = KitsuController