const mongoose_instance = () => {

    const mongoose = require('mongoose');

    return new Promise(async (resolve, reject) => {

        await mongoose.connect('mongodb://localhost/post_db', {

            useNewUrlParser: true,

            useUnifiedTopology: true,

            useFindAndModify: false,

            useCreateIndex: true

        });


    });


};





module.exports = mongoose_instance;