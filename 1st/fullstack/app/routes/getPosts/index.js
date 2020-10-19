const router = require('express').Router();

const { validationResult } = require('express-validator');

const GetPostInputValidation = require('./GetPostInputValidation.js');

const bodyParser = require('body-parser');

router.use(bodyParser.json());



router.post('/get_posts', GetPostInputValidation, (req, res) => {

    var errors = validationResult(req);

    if (!errors.isEmpty()) {

        return res.status(403).json({ errors });

    }

    (async () => {

        var get_posts = require('./components/index.js');

        var get_posts_response = await get_posts(req.body);

        res.send(get_posts_response);

        try {

        } catch (e) {

            res.send(e);

        }

    })();


});



module.exports = router;