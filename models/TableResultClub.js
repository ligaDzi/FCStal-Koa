const mongoose = require('../libs/mongoose');

const newsSchema = new mongoose.Schema({

    season: {
        type: String,
        required: 'Укажите поле season'
    },
    liga: {
        type: String,
        required: 'Укажите поле liga'
    },
    number: {
        type: String,
        required: 'Укажите поле number',
    },
    gamesNum: {
        type: Number,
        required: 'Укажите поле gamesNum',
    },
    victoryNum: {
        type: Number,
        required: 'Укажите поле victoryNum',
    },
    drawsNum: {
        type: Number,
        required: 'Укажите поле drawsNum',
    },
    lesionsNum: {
        type: Number,
        required: 'Укажите поле lesionsNum',
    },
    goalScoreMissed: {
        type: String,
        required: 'Укажите поле goalScoreMissed',
    },
    points: {
        type: Number,
        required: 'Укажите поле points',
    }
}, {
  timestamps: true
});

module.exports = mongoose.model('TableResultClub', newsSchema);