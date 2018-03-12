const mongoose = require('../libs/mongoose');

const newsSchema = new mongoose.Schema({

    number: {
        type: Number,
        required: 'Укажите поле season'
    },
    birthday: {
        type: Date,
        required: 'Укажите поле birthday'
    },
    foto: {
        type: String,
        required: 'Укажите поле foto',
    },
    name: {
        type: String,
        required: 'Укажите поле name',
    },
    surname: {
        type: String,
        required: 'Укажите поле surname',
    },
    growth: {
        type: Number,
        required: 'Укажите поле growth',
    },
    wt: {
        type: Number,
        required: 'Укажите поле wt',
    },
    game: {
        type: Number,
        required: 'Укажите поле game',
    },
    minut: {
        type: Number,
        required: 'Укажите поле minut',
    },
    goal: {
        type: Number,
        required: 'Укажите поле goal',
    },
    goalPass: {
        type: Number,
        required: 'Укажите поле goalPass',
    },
    yellowCart: {
        type: Number,
        required: 'Укажите поле yellowCart',
    },
    redCart: {
        type: Number,
        required: 'Укажите поле redCart',
    },
    allGame: {
        type: Number,
        required: 'Укажите поле allGame',
    },
    allGoal: {
        type: Number,
        required: 'Укажите поле allGoal',
    },
    amplua: {
        type: String,
        required: 'Укажите поле amplua',
    }
}, {
  timestamps: true
});

module.exports = mongoose.model('Team', newsSchema);