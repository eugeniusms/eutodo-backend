const express = require('express');

const app = express();

app.get('/api', function(req, res){
    console.log('GET Request');
    res.send({ name: 'Mario'});
});

app.post('/api', function(req, res){
    console.log('GET Request');
    res.send({ name: 'Mario'});
});

app.listen(process.env.port || 4000, function(){
    console.log('Now Listening for Requests');
});