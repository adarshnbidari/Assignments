const { body } = require('express-validator');

const GetPostInputValidation = [

    body('username')

        .not().isEmpty().withMessage('username is required')

        .trim()

        .escape(),


];


module.exports = GetPostInputValidation;