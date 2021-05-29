const mongoose = require('mongoose');

const contentSchema = mongoose.Schema({
    title: {type: 'string', required: true},
    description: {type: 'string', required: true},
    platforms: {type: 'array', required: true},
    images: {type: 'array', required: true},
    isSerie: {type: 'bool', required: true},
    episodes: {type: 'array', required: false},
    time: {type: 'string', required: false}
});

module.exports = mongoose.model('Content', contentSchema);