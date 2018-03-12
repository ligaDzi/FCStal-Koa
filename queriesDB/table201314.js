const mongoose = require('../libs/mongoose');
const Table201314 = require('../models/Table201314');

module.exports = {

    find_AllAndSort: async function (ctx) {

        // найти все записи в таблице Table201314 и отсортировать по полю points по возрастанию.
        let table = await Table201314.find({}).sort({points: 1});

        if(!table){
            ctx.throw(404, 'match не найден');
        }

        // отсортировать по забитым и пропущинным голам. (goalScore - goalMissed )
        table = await table.map(team => {

            team.goal_diff = team.goalScore - team.goalMissed;
            return team;
        });
        table = await table.sort({goal_diff: 1});

        // отсортировать по забитым голам goalScore.
        table = await table.sort({goalScore: 1});

        return table;        
    }
}