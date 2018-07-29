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

app.get('/cazare', function(req, res){
    res.render('cazare');
});

app.get('/restaurant', function(req, res){
    res.render('restaurant');
});

app.get('/conferinte', function(req, res){
    res.render('conferinte');
});

app.get('/galerie', function(req, res){
    res.render('galerie');
});

app.get('/evenimente', function(req, res){
    res.render('evenimente');
});

app.get('/contact', function(req, res){
    res.render('contact');
});

app.get('/agrement', function(req, res){
    res.render('agrement');
});




app.listen(PORT, () => console.log(`Listening on ${ PORT }`));