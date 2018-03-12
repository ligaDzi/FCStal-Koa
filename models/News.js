const mongoose = require('../libs/mongoose');

const newsSchema = new mongoose.Schema({
    mainNews: {
        type: Boolean,
        required: 'Укажите поле mainNews',
        default:    false
    },
    dateNews: {
        type: Date,
        required: 'Укажите поле dateNews'
    },
    sourceNews: {
        type: String,
        required: 'Укажите поле sourceNews'
    },
    imgHeader: {
        type: String
    },
    headerNews: {
        type: String,
        required: 'Укажите поле headerNews'
    },
    bodyNews: {
        type: String,
        required: 'Укажите поле bodyNews'
    }

}, {
  timestamps: true
});

module.exports = mongoose.model('News', newsSchema);