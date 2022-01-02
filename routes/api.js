const express = require('express');
const router = express.Router();
const Todo = require('../models/todo');

// get a list of todos from the db
router.get('/todos', function(req, res, next){
    res.send({ type:'GET' });
});

// add a new todo to the db
router.post('/todos', function(req, res, next){
    Todo.create(req.body).then(function(todo){
        res.send(todo);
    }).catch(next);
});

// update a ninja in the db
router.put('/todos/:id', function(req, res, next){
    Todo.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function(todo){
        Todo.findOne({ _id: req.params.id }).then(function(todo){
            res.send(todo);
        });
    });
});

// delete a todo from the db
router.delete('/todos/:id', function(req, res, next){
    Todo.findByIdAndRemove({ _id: req.params.id }).then(function(todo){
        res.send(todo);
    });
});

module.exports = router;