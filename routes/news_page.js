
module.exports = {

  // возвращает страницу "Новости"
  get: async function(ctx, next) {

    // (12 - 9) потому что когда нажимаеш на кнопку "Больше новостей" к req.session.indexNews прибавляется число 9 (см. get_more())
    ctx.session.indexNews = 12 - 9;

    const fillNewsPg = require('../functions/fill_NewsPage');
    
    const masNews = await fillNewsPg.fill_news(ctx);       

    await ctx.render('newsPage', {news: masNews});
    
  },
  // показывает новость по id
  get_by_id: async function(ctx, next){

    const fillOneNewsPg = require('../functions/fill_OneNews');
    
    const news = await fillOneNewsPg.fill_one_news(ctx); 

    await ctx.render(`./News/${news.sourceNews}`, {
        headerNews: news.headerNews, 
        dateNews: news.dateNews,
        imgHeader: news.imgHeader        
    }); 
  },
  // добавляет еще блоки новостей
  get_more: async function(ctx, next){

    ctx.session.indexNews += 9;

    const fillMoreNews = require('../functions/fill_MoreNews');
    
    const masNews = await fillMoreNews.fill_more_news(ctx);       

    await ctx.render('moreNews', {news: masNews});

  },
  //
  getJSON: async function(ctx, next){

    let news = require('../templates/telegramBotNews/news.json'); 

    ctx.body = news;
    ctx.status = 200;
  }
}