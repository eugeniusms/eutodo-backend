const express = require('express');
const router = express.Router();

// get a list of todos from the db
router.get('/todos', function(req, res){
    res.send({ type:'GET' });
});

// add a new todo to the db
router.post('/todos', function(req, res){
    res.send({ type:'POST' });
});

// update a ninja in the db
router.put('/todos/:id', function(req, res){
    res.send({ type:'PUT' });
});

// delete a todo from the db
router.delete('/todos/:id', function(req, res){
    res.send({ type:'DELETE' });
});

module.exports = router;