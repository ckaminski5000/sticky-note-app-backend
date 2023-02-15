const mongoose = require('mongoose');

const stickySchema = mongoose.Schema({
    user_id: {type: String, required: true},
    title: {type: String, required: true},
    tasks: {type: [String], required: true}
})

module.exports = mongoose.model('Sticky', stickySchema);