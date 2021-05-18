const mongoose = require('mongoose');

const contentSchema = mongoose.Schema({
    title: {type: 'string', required: true},
    description: {type: 'string', required: true},
    images: {type: 'array', required: true}
});

module.exports = mongoose.model('Content', contentSchema);