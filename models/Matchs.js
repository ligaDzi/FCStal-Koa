const mongoose = require('../libs/mongoose');

const newsSchema = new mongoose.Schema({
    dateMatch: {
        type: Date,
        required: 'Укажите поле dateMatch'
    },
    tournament: {
        type: String,
        required: 'Укажите поле tournament'
    },
    nameHostTeam: {
        type: String,
        required: 'Укажите поле nameHostTeam'
    },
    goalHost: {
        type: Number
    },
    playersGoalHost: {
        type: String
    },
    playersYeelowHost: {
        type: String
    },
    playersRedHost: {
        type: String
    },
    nameVisitTeam: {
        type: String,
        required: 'Укажите поле nameVisitTeam'
    },
    goalVisit: {
        type: Number
    },
    playersGoalVisit: {
        type: String
    },
    playersYeelowVisit: {
        type: String
    },
    playersRedVisit: {
        type: String
    },
    referee: {
        type: String
    },
    stadium: {
        type: String
    },
    audience: {
        type: Number
    }
}, {
  timestamps: true
});

module.exports = mongoose.model('Matchs', newsSchema);