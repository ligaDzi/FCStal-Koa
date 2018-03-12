
// возвращает страницу "Календарь"
exports.get = async function(ctx, next) {

    const fillCalendarPg = require('../functions/fill_CalendarPage');
    
    const masMatchs = await fillCalendarPg.fill_maths(ctx);   

    await ctx.render('calendarPage', {
        matchs: masMatchs,
        nextLogoTourn: ctx.session.nextMatchInfo.logoTournament,
        nextTournament: ctx.session.nextMatchInfo.tournament, 
        nextLogoHost: ctx.session.nextMatchInfo.logoHost,
        nextHost: ctx.session.nextMatchInfo.nextHost, 
        nextLogoVisit: ctx.session.nextMatchInfo.logoVisit,
        nextVisit: ctx.session.nextMatchInfo.nextVisit, 
        nexDate: ctx.session.nextMatchInfo.date,
        nextTime: ctx.session.nextMatchInfo.time
    });    
  }