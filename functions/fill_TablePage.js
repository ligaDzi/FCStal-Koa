
const table201314 = require('../queriesDB/table201314');
const table_Conv = require('../data_Conversion/table_Conv');


exports.fill_table = async function (ctx) {

    const table = await table201314.find_AllAndSort(ctx);    

    return table_Conv.conversion(table); 
}