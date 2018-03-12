const table = require('../queriesDB/tableResultClub');

exports.fill_historyTable = async function (ctx) {

    const history_table = await table.find_All(ctx);    

    return history_table; 
}