require('dotenv').config()

const express = require('express');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));


var main_root = require('./routes/main/index.js');

app.use('/', main_root);



app.listen(process.env.SERVER_PORT, () => {

    console.log(`Server is running at localhost on port ${process.env.SERVER_PORT}`);

});

