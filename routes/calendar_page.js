
module.exports = {

    // возвращает страницу "Календарь"
    get: async function(ctx, next) {

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
      },
    // возвращает расписание в сокращенном виде для телеграм бота
    getMatchs: async function(ctx, next){

        const fillCalendarPg = require('../functions/fill_CalendarPage');
        
        const masMatchs = await fillCalendarPg.fill_maths(ctx); 
        
        let masBot = [];
        for (let i in masMatchs) {
            let obj = {};
            obj.year = masMatchs[i].year;
            obj.day = masMatchs[i].day;
            obj.nameHostTeam = masMatchs[i].nameHostTeam;
            obj.goalHost = masMatchs[i].goalHost;
            obj.nameVisitTeam = masMatchs[i].nameVisitTeam;
            obj.goalVisit = masMatchs[i].goalVisit;
    
            masBot[i] = obj;
        }
        ctx.body = masBot;
        ctx.status = 200;
    }
}

