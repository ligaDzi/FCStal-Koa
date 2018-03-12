const teams = require('../queriesDB/teams');
const team_Conv = require('../data_Conversion/team_Conv');


exports.fill_team = async function (ctx) {

    const players = await teams.find_All(ctx);    

    return team_Conv.conversion(players); 
}