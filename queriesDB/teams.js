const mongoose = require('../libs/mongoose');
const Team = require('../models/Team');

module.exports = {

    find_All: async function (ctx) {

        const players = await Team.find({});

        if(!players){
            ctx.throw(404, 'players не найден');
        }
        return players;        
    }
}