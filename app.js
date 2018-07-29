const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000
const bodyParser= require("body-parser");
const app=express();


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');



app.get('/', function(req, res){
    res.render('home');
});


app.listen(PORT, () => console.log(`Listening on ${ PORT }`));