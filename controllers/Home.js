const Jikan = require('../apis/jikan')

class HomeController{
    static upcoming(req, res, next){
        Jikan({
            method: 'get',
            url: 'top/anime/1/upcoming'
        })
        .then(({data}) => {
            console.log(data);
            res.status(200).json(data)
        })
        .catch(next)
    }
}


module.exports = HomeController