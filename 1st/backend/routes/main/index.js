var router = require('express').Router();

router.get('/', (req, res) => {

    var search_post = req.body.post ? req.body.post : '/';

    var search_url = `https://medium.com${search_post}`;



    (async () => {


        try {

            const crawl = require('./components/index.js');


            var links = await crawl(search_url);

            return res.send(links);


        } catch (e) {

            res.send(e);


        }


    })();





});


module.exports = router;

