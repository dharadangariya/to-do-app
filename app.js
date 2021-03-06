const express = require('express');
const todocontroller = require('./controller/todocontroller');
const app = express();
const port = 3030;

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
//set template engine

app.set('view engine', 'ejs');

//fire controller
todocontroller(app);

//listern port

app.listen(port, () => {
    console.log('port 3030')
});