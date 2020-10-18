const router = require('express').Router();

const { validationResult } = require('express-validator');

const GetCommentsInputValidation = require('./GetCommentsInputValidation.js');

const bodyParser = require('body-parser');

router.use(bodyParser.json());



router.post('/get_comments', GetCommentsInputValidation, (req, res) => {

    var errors = validationResult(req);

    if (!errors.isEmpty()) {

        return res.status(403).json({ errors });

    }

    (async () => {

        var get_comments = require('./components/index.js');

        var get_comments_response = await get_comments(req.body);

        res.send(get_comments_response);

        try {

        } catch (e) {

            res.send(e);

        }

    })();


});



module.exports = router;