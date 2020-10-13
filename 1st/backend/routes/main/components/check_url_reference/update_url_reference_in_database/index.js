const update_url_reference_in_database = (url) => {

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


        UpdateExpression: "SET reference_count = reference_count + :rc",


        ExpressionAttributeValues: {

            ":rc": {

                N: "1"

            }

        },


        ReturnValues: "UPDATED_NEW"


    };



    return dynamodb.updateItem(params).promise();




};

module.exports = update_url_reference_in_database;