const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId;

const urlSchema = mongoose.Schema({
    code: {
        type: String,
        require: true
    },
    url: {
        type: String,
        require: true
    }
}, {
    timestamps: true
}, {
    collection: 'urls'
})

module.exports = mongoose.model('urls', urlSchema);
