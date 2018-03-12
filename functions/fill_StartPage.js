const matchs = require('../queriesDB/matchs');
const matchConv = require('../data_Conversion/match_Conv');

const table201314 = require('../queriesDB/table201314');
const table201314_Conv = require('../data_Conversion/table_start_Conv');

const news = require('../queriesDB/news');
const news_Conv = require('../data_Conversion/news_Conv');

module.exports = {

    // следующий матч на стартовой странице
    fill_match: async function(id, ctx){

        const match = await matchs.find_MatchById(id, ctx);

        return matchConv.one_conversion(match);
    },

    // заполнение таблицы на стартовой странице
    fill_table: async function(ctx){        

        const table = await table201314.find_AllAndSort(ctx);

        return table201314_Conv.conversion(table);

    },

    // здесь выбераются банеры из БД на главную страницу
    fill_baners: async function(ctx){

        const baners = await news.find_mainNews(ctx);

        return news_Conv.conversion(baners);

    },

    // выборка новостей из БД на главную.
    fill_news: async function(ctx){
        
        const newsDB = await news.find_from_to_news(ctx, ctx.session.indexNews, 9);

        return news_Conv.conversion(newsDB);

    }
}