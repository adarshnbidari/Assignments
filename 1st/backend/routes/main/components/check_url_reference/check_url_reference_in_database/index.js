const check_url_reference_in_database = (url) => {

    var AWS = require('aws-sdk');

    AWS.config.update({

        region: "ap-south-1",
        endpoint: process.env.DYNAMODB_ENDPOINT,

    });

    var credentials = new AWS.Credentials({

        accessKeyId: process.env.AWS_ACCESS_KEY_ID, secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,

    });

    let dynamodb = new AWS.DynamoDB({

        credentials

    });

    var params = {

        TableName: "link_table",

        Key: {

            "url": {

                S: url

            }


        },


    };



    return dynamodb.getItem(params).promise();




};


module.exports = check_url_reference_in_database;