const express = require('express');

const app = express();

app.get('/', function(){
    console.log('GET Request');
});

app.listen(process.env.port || 4000, function(){
    console.log('Now Listening for Requests');
});