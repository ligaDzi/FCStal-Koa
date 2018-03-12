
const news = require('../queriesDB/news');
const news_Conv = require('../data_Conversion/news_Conv');

module.exports = {
    // выборка новостей из БД на страницу "Новости".
    fill_news: async function(ctx){
        
        const newsDB = await news.find_from_to_news(ctx, 0, 12);

        return news_Conv.conversion(newsDB);

    }
}