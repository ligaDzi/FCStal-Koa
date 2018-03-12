const mongoose = require('../libs/mongoose');
const Matchs = require('../models/Matchs');

module.exports = {

    find_MatchById: async function (id, ctx) {

        if(!mongoose.Types.ObjectId.isValid(id)){
            ctx.throw(404, 'Не правильно указанно id');
        } 
        const match = await Matchs.findById(id);

        if(!match){
            ctx.throw(404, 'match не найден');
        }
        return match;        
    },
    find_all_matchs: async function(ctx){

        const matchs = await Matchs.find({}).sort({dateMatch: 1});

        if(!matchs){
            ctx.throw(404, 'matchs не найден');
        }
        return matchs; 
    }
}