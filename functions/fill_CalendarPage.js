
const matchs = require('../queriesDB/matchs');
const match_Conv = require('../data_Conversion/match_Conv');


exports.fill_maths = async function (ctx) {

    const matchsDB = await matchs.find_all_matchs(ctx);    

    return match_Conv.conversion(matchsDB); 
}