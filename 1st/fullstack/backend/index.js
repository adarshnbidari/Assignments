require('dotenv').config();

const express = require('express');

const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

//establish database connection
const mongoose = require('./databaseOperations/index.js');
(async () => await mongoose())();

//routes

const SavePost = require('./routes/SavePost/index.js');
app.use('/', SavePost);

const ReplyToPost = require('./routes/ReplyToPost/index.js');
app.use('/', ReplyToPost);

const DeletePost = require('./routes/DeletePost/index.js');
app.use('/', DeletePost);

const EditPost = require('./routes/EditPost/index.js');
app.use('/', EditPost);

const GetPosts = require('./routes/getPosts/index.js');
app.use('/', GetPosts);

const GetComments = require('./routes/getComments/index.js');
app.use('/', GetComments);


app.listen(process.env.SERVER_PORT, () => {

    console.log("Server is running at localhost");

});

