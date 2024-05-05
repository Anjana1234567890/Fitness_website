const mongoose = require('mongoose')


const userCollection = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    collection: 'userCollections'
})


module.exports = mongoose.model('userCollection', userCollection)