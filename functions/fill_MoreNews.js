
const news = require('../queriesDB/news');
const news_Conv = require('../data_Conversion/news_Conv');


exports.fill_more_news = async function (ctx) {

    const newsDB = await news.find_from_to_news(ctx, ctx.session.indexNews, 9);    

    return news_Conv.conversion(newsDB); 
}