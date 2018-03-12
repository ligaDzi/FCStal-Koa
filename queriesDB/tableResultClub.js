const mongoose = require('../libs/mongoose');
const Table = require('../models/TableResultClub');

module.exports = {

    find_All: async function (ctx) {

        const table = await Table.find({});

        if(!table){
            ctx.throw(404, 'table history не найден');
        }
        return table;        
    }
}