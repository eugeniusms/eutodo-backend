const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create todo Schema and model
const TodoSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title field is required']
    },
    category: {
        type: String
    },
    time: {
        type: String
    },
    progress: {
        type: String
    },
    completed: {
        type: Boolean
    },
    available: {
        type: Boolean,
        default: false
    }
    // add in geo location
});

const Todo = mongoose.model('todo', TodoSchema);

module.exports = Todo;