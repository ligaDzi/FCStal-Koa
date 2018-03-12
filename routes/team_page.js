// возвращает страницу "Команда"
exports.get = async function(ctx, next) {

    const fillTeamPg = require('../functions/fill_TeamPage');
    
    const players = await fillTeamPg.fill_team(ctx);   

    await ctx.render('team', {
        goalkeepersHBS: players.goalkeepers,
        backsHBS: players.backs, 
        halfbacksHBS: players.halfbacks,
        forwardsHBS: players.forwards
    });   
  }