require('dotenv').config();

const cluster = require('cluster');


if (cluster.isMaster) {


    let cpuCount = require('os').cpus().length;

    for (let i = 0; i < cpuCount; i++) {

        cluster.fork();

    }


} else {

    const express = require('express');

    const bodyParser = require('body-parser');

    const app = express();

    app.use(bodyParser.urlencoded({ extended: true }));


    var main_root = require('./routes/main/index.js');

    app.use('/', main_root);



    app.listen(process.env.SERVER_PORT, () => {

        console.log(`Cluster ${cluster.worker.id} Server is running at localhost on port ${process.env.SERVER_PORT}`);

    });


}

cluster.on('exit', worker => {

    cluster.fork();

});