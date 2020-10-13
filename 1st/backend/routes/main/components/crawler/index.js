const crawler = (url) => {

    var request = require('request');

    var parse = require('url-parse');

    var captured_urls = {};

    return new Promise(async (resolve, reject) => {

        var check_url_reference = require('../check_url_reference/index.js');

        var url_exists = await check_url_reference(url);


        if (!url_exists) {


            request.get(url, (error, response, body) => {


                if (error) reject(error);

                var links = body.match(/href\s*=\s*(['"])(https?:\/\/medium.com.+?)\1/ig);

                if (links == null || links == undefined) {

                    reject({

                        status: 'success',
                        message: "no more links to show"

                    });

                }


                links = links.map(e => e.split("\"")[1]);


                links.forEach(e => {

                    var info = parse(e);

                    var kp = getKeyValuePairs(info.query);

                    captured_urls[e] = {

                        query_parameters: kp

                    };


                });


                resolve(captured_urls);


            });


        } else {


            resolve(false);

        }




    });

};




const getKeyValuePairs = (params) => {

    var kv = {};

    params.slice(1).split("&&").forEach(e => {

        var data = e.split("=");

        kv[data[0]] = data[1];

    });

    return kv;


};




module.exports = crawler;