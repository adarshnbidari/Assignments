const router = require('express').Router();

const { validationResult } = require('express-validator');

const DeletePostInputValidation = require('./DeletePostInputValidation.js');

const bodyParser = require('body-parser');

router.use(bodyParser.json());



router.post('/delete_post', DeletePostInputValidation, (req, res) => {

    var errors = validationResult(req);

    if (!errors.isEmpty()) {

        return res.status(403).json({ errors });

    }

    (async () => {

        try {

            var delete_post = require('./components/index.js');

            var delete_response = await delete_post(req.body);

            res.send(delete_response);


        } catch (e) {

            res.send(e);

        }


    })();



});



module.exports = router;