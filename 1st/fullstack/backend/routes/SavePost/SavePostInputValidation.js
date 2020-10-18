const { body } = require('express-validator');

const SavePostInputValidation = [

    body('username')

        .not().isEmpty().withMessage('username is required')

        .trim()

        .escape(),

    body('post_message')

        .not().isEmpty().withMessage('post_message is required')

        .trim()

        .escape(),

];


module.exports = SavePostInputValidation;