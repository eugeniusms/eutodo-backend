const express = require('express');

// set up express app
const app = express();

// initialize routes
app.use('/api', require('./routes/api'));

// app.get('/api', function(req, res){
//     console.log('GET Request');
//     res.send({ name: 'Mario'});
// });

// listen for requests
app.listen(process.env.port || 4000, function(){
    console.log('Now Listening for Requests');
});