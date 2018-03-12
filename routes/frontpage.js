

// возвращает стартовую страницу
exports.get = async function(ctx, next) {

    ctx.session.indexNews = 0;

    // здесь хранится информация о следующем матче.
    // Хранится в сессии потому что если хранить на сервере то будут возникать проблемы, 
    // т.к. сервер по истечению определенного времени отчищает кэш.
    const fillStartPg = require('../functions/fill_StartPage');
    
    ctx.session.nextMatchInfo = await fillStartPg.fill_match("5a9fd61e9c40d345e4bb73c7", ctx);

    // таблица на стартовой странице
    ctx.session.startTable = await fillStartPg.fill_table(ctx);
    
    // здесь выбераются банеры из БД на главную страницу
    const banerNews = await fillStartPg.fill_baners(ctx);

    // выборка новостей из БД на главную.
    const masNews = await fillStartPg.fill_news(ctx);    

    await ctx.render('index', {
      baner1: banerNews[0],
      baner2: banerNews[1], 
      baner3: banerNews[2], 
      news: masNews, 
      nextLogoTourn: ctx.session.nextMatchInfo.logoTournament, 
      nextLogoHost: ctx.session.nextMatchInfo.logoHost,
      nextLogoVisit: ctx.session.nextMatchInfo.logoVisit, 
      nextTournament: ctx.session.nextMatchInfo.tournament,
      nextOpponent: ctx.session.nextMatchInfo.opponent, 
      nexDate: ctx.session.nextMatchInfo.date,
      nextTime: ctx.session.nextMatchInfo.time, 
      teams: ctx.session.startTable
    });
    
  };