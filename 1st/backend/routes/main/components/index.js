const init = (url) => {

    return new Promise(async (resolve, reject) => {


        try {


            var crawl_url = require("./crawler/index.js");


            var crawled_data = await crawl_url(url);


            if (Object.keys(crawled_data).length > 0) {


                var store_link_data = require('./store_link_data/index.js');

                await store_link_data(crawled_data);

                Object.keys(crawled_data).forEach(async current_url => {

                    await init(current_url);


                });


            } else {

                resolve({

                    status: 'success',
                    message: 'no links found'

                });


            }


            resolve({

                status: 'success',
                message: 'links stored in the database successfully'

            });



        } catch (e) {


            reject(e);

        }


    });


};


module.exports = init;