const mongoose = require('mongoose');

const platformsSchema = mongoose.Schema({
    platforms: {type: 'array', required: true}
})

module.exports = mongoose.model('Platform', platformsSchema)