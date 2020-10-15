const { body } = require('express-validator');

const GetCommentsInputValidation = [

    body('username')

        .not().isEmpty().withMessage('username is required')

        .trim()

        .escape(),

    body('post_id')

        .not().isEmpty().withMessage('post_id is required')

        .trim()

        .escape(),


];


module.exports = GetCommentsInputValidation;