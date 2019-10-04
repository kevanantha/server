const { pantsu } = require('../config/axios')

class PantsuController {
    static search(req, res, next) {
        let { q, resolution } = req.query

        q = q.replace(/[^0-9a-zA-Z;]/, " ")

        switch (resolution) {
            case '480p': break;
            case '720p': break;
            case '1080p': break;
            default: return next({ status: 400, message: "Supported Resolution Values: '480p', '720p', '1080p'" })
        }

        pantsu.get('?q=[Horriblesubs] ' + q + ' ' + resolution + '&sort=2')
            .then(({ data }) => {
                const arr = []
                const regex = new RegExp(`^\\[HorribleSubs\\] ${q} - \\d+ \\[${resolution}\\].mkv$`, 'i')
                console.log(regex)
                data.torrents.forEach(el => {
                    regex.test(el.name) ? arr.push(el) : ""
                })
                res.status(200).json(arr)
            }).catch(next);
    }
}

module.exports = PantsuController