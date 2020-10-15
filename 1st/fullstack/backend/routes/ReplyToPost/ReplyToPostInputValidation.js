const { body } = require('express-validator');

const ReplyToPostInputValidation = [

    body('username')

        .not().isEmpty().withMessage('username is required')

        .trim()

        .escape(),

    body('post_id')

        .not().isEmpty().withMessage('post_id is required')

        .trim()

        .escape(),


    body('post_message')

        .not().isEmpty().withMessage('post_message is  required')

        .trim()

        .escape(),



];


module.exports = ReplyToPostInputValidation;