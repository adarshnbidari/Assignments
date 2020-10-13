const store_link_data_in_database = (data) => {

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

        Item: {

            "url": {

                S: data.url

            },


            "params": {

                S: JSON.stringify(data.params)

            },

            "reference_count": {

                N: "1"


            }



        }


    };



    return dynamodb.putItem(params).promise();


};


module.exports = store_link_data_in_database;