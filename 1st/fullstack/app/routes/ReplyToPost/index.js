const router = require('express').Router();

const { validationResult } = require('express-validator');

const ReplyToPostInputValidation = require('./ReplyToPostInputValidation.js');

const bodyParser = require('body-parser');

router.use(bodyParser.json());



router.post('/reply_to_post', ReplyToPostInputValidation, (req, res) => {

    var errors = validationResult(req);

    if (!errors.isEmpty()) {

        return res.status(403).json({ errors });

    }


    (async () => {

        try {

            var reply_to_post = require('./components/index.js');

            var reply_status = await reply_to_post(req.body);

            res.send(reply_status);


        } catch (e) {

            return res.send(e);

        }


    })();


});



module.exports = router;