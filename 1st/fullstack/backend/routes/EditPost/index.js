const router = require('express').Router();

const { validationResult } = require('express-validator');

const EditPostInputValidation = require('./EditPostInputValidation.js');

const bodyParser = require('body-parser');

router.use(bodyParser.json());



router.post('/edit_post', EditPostInputValidation, (req, res) => {

    var errors = validationResult(req);

    if (!errors.isEmpty()) {

        return res.status(403).json({ errors });

    }

    (async () => {

        var edit_post = require('./components/index.js');

        var edit_post_response = await edit_post(req.body);

        res.send(edit_post_response);

        try {

        } catch (e) {

            res.send(e);

        }

    })();


});



module.exports = router;