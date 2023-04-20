const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '/public')))

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/proiect_chimie', (req, res) => {
    res.render('hub.ejs');
})

app.get('*', (req, res) => {
    res.redirect('/proiect_chimie');
})

const host = '0.0.0.0';
const port = process.env.PORT || 3000;

var http = require("http");
setInterval(function () {
    try {
        http.get("http://krakencryptobot.herokuapp.com");
        console.log('Fetched');
    } catch (err) {
        console.err(err);
    }

}, 300000);

app.listen(port, host, function () {
    console.log("Server started.......");
});
