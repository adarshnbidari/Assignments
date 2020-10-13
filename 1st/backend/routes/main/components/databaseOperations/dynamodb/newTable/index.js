const createNewTable = () => {

    let AWS = require('aws-sdk');

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

    let params = {

        TableName: "link_table",

        KeySchema: [

            { AttributeName: "url", KeyType: "HASH" },

        ],

        AttributeDefinitions: [

            { AttributeName: "url", AttributeType: "S" },

        ],


        ProvisionedThroughput: {

            ReadCapacityUnits: 10,
            WriteCapacityUnits: 10

        }


    };


    return dynamodb.createTable(params).promise();



};

module.exports = createNewTable;