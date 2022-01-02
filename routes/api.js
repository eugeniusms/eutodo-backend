const express = require('express');
const router = express.Router();

// get a list of todos from the db
router.get('/todos', function(req, res){
    res.send({ type:'GET' });
});

// add a new todo to the db
router.post('/todos', function(req, res){
    console.log(req.body);
    res.send({ 
        type:'POST',
        title: req.body.title,
        category: req.body.category,
        time: req.body.time,
        progress: req.body.progress,
        completed: req.body.completed
     });
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