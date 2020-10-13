const check_url_reference = (url) => {

    return new Promise(async (resolve, reject) => {


        try {


            var check_url_reference_in_database = require('./check_url_reference_in_database/index.js');


            var url_exists = await check_url_reference_in_database(url);


            if (Object.keys(url_exists) && url_exists.Item) {


                var update_url_reference_in_database = require('./update_url_reference_in_database/index.js');

                await update_url_reference_in_database(url);

                resolve(true);

                

            } else {


                resolve(false);


            }



        } catch (e) {

            if (e.code == "ResourceNotFoundException") {

                var new_table = require('../databaseOperations/dynamodb/newTable/index.js');

                await new_table();

                resolve(false);


            } else {

                reject(e);

            }


        }


    });


};


module.exports = check_url_reference;