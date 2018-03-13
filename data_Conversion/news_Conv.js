

const months = require('../config/default').months;

module.exports = {

    conversion: function(news){ 
        
        let newsArr = [];

        for(let i = 0; i < news.length; i++){

            newsArr[i] = {};
            
            newsArr[i].id = news[i]._id;
            newsArr[i].mainNews = news[i].mainNews;            
            newsArr[i].imgHeader = news[i].imgHeader;
            newsArr[i].headerNews = news[i].headerNews;
            newsArr[i].sourceNews =  news[i].sourceNews;

            //Здесь формируется строка даты для блока новостей.
            const date = new Date(news[i].dateNews);

            newsArr[i].dateNews = `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
            
        }
        return newsArr; 
    },
    conversionID: function(news){ 
        
        let newsArr = {};
            
        newsArr.id = news._id;
        newsArr.mainNews = news.mainNews;
        newsArr.imgHeader = news.imgHeader;
        newsArr.headerNews = news.headerNews;
        newsArr.sourceNews = news.sourceNews;

        //Здесь формируется строка даты для блока новостей.
        const date = new Date(news.dateNews);

        newsArr.dateNews = `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
        

        return newsArr; 
    }
}