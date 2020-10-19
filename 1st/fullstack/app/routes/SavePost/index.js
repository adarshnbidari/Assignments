const router = require('express').Router();

const { validationResult } = require('express-validator');

const SavePostInputValidation = require('./SavePostInputValidation.js');

const bodyParser = require('body-parser');

router.use(bodyParser.json());



router.post('/save_post', SavePostInputValidation, (req, res) => {

    var errors = validationResult(req);

    if (!errors.isEmpty()) {

        return res.status(403).json({ errors });

    }

    (async () => {

        try {

            var storePost = require('./components/index.js');

            var result = await storePost(req.body);

            res.send(result);


        } catch (e) {

            res.send(e);

        }


    })();




});



module.exports = router;