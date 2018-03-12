
const news = require('../queriesDB/news');
const news_Conv = require('../data_Conversion/news_Conv');


exports.fill_one_news = async function (ctx) {

    const newsDB = await news.find_news_by_id(ctx);    

    return news_Conv.conversionID(newsDB); 
}