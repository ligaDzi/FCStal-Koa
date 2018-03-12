const mongoose = require('../libs/mongoose');
const News = require('../models/News');

module.exports = {

    // выборка новостей из БД отмеченных как главные (mainNews: true).
    find_mainNews: async function (ctx) {

        const news = await News.find({mainNews: true});

        if(!news){
            ctx.throw(404, 'news не найден');
        }
        return news;        
    },

    // выборка новостей из БД порциями по 9 штук.
    find_from_to_news: async function(ctx, index_from, index_to){

        // найти новости - отсортировать по дате по убыванию - отсортировать по загаловку по возрастанию -
        // пропустить столько = ctx.session.indexNews новостей - выбратьь только 9 новостей.
        const news = await News.find({}).sort({dateNews: -1}).sort({headerNews: 1}).skip(index_from).limit(index_to);

        if(!news){
            ctx.throw(404, 'news не найден');
        }
        return news;    
    },
    // найти новость по id
    find_news_by_id: async function(ctx){
               

        if(!mongoose.Types.ObjectId.isValid(ctx.params.id)){
            ctx.throw(404, 'Не правильно указанно id');
        } 
        const news = await News.findById(ctx.params.id);

        if(!news){
            ctx.throw(404, 'news не найден');
        }        
         
        return news;  
    }
}