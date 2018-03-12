const mongoose = require('../libs/mongoose');

const newsSchema = new mongoose.Schema({

    nameTeam: {
        type: String,
        required: 'Укажите поле nameTeam'
    },
    gamesNum: {
        type: Number,
        required: 'Укажите поле gamesNum'
    },
    victoryNum: {
        type: Number,
        required: 'Укажите поле victoryNum'
    },
    drawsNum: {
        type: Number,
        required: 'Укажите поле drawsNum'
    },
    lesionsNum: {
        type: Number,
        required: 'Укажите поле lesionsNum'
    },
    goalScore: {
        type: Number,
        required: 'Укажите поле goalScore'
    },
    goalMissed: {
        type: Number,
        required: 'Укажите поле goalMissed'
    },
    points: {
        type: Number,
        required: 'Укажите поле points'
    }

}, {
  timestamps: true
});

module.exports = mongoose.model('Table201314', newsSchema);