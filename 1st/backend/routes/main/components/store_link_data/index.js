const store_link_data = (crawled_data) => {

    return new Promise(async (resolve, reject) => {


        Object.keys(crawled_data).forEach(async url_data => {

            var data_to_store = {

                url: url_data,
                params: crawled_data[url_data].query_parameters


            };


            var store_link_data_in_database = require('./store_link_data_in_database/index.js');

            try {

                await store_link_data_in_database(data_to_store);


            } catch (e) {


                if (e.code == "ResourceNotFoundException") {

                    var new_table = require('../databaseOperations/dynamodb/newTable/index.js');

                    await new_table();

                    await store_link_data_in_database(data_to_store);


                } else {

                    reject(e);

                }


            }


        });


        resolve(true);


    });


};


module.exports = store_link_data;