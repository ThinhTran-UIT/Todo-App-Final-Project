const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PostSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    usernamePost:{
        type: String,
        required: true
    },
    passwordPost:{
        type: String,
        required: true
    },
    url:{
        type: String
    },
    status:{
        type: String,
        enum: ['NORMAL', 'PRIVATE']
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: 'users'
    }
})

module.exports = mongoose.model('posts', PostSchema);