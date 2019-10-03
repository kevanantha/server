const Jikan = require('../apis/jikan')

class HomeController{
    static async upcoming(req, res, next){
      try {
        const { data: upcoming } = await Jikan({
          method: 'get',
          url: 'top/anime/1/upcoming'
        })

        const data = await upcoming.top.map(async up => {
          const { data: detail } = await Jikan({
            method: 'get',
            url: `anime/${up.mal_id}`
          })
          return detail
        })

        const all = await Promise.all(data)

        res.status(200).json(all)
      } catch(err) {
        next()
      }
    }
}


module.exports = HomeController
