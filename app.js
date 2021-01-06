const express = require('express');
const app = express();
const ejs = require('ejs')
const bodyParser = require('body-parser');
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static(__dirname + '/public'))

app.get('/inbox',(req,res) => {
    res.render('inbox');
});

app.use((req,res,next) => {
    res.status(404).render('404');
});

app.listen(3000);
