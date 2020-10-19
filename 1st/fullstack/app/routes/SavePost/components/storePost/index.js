const storePost = (data) => {

    return new Promise(async (resolve, reject) => {

        const mongoose = require('mongoose');

        var Schema = mongoose.Schema;

        var postModel = null;

        try {

            postModel = mongoose.model('posts');

        } catch (e) {


            var userPost = new Schema({

                post_id: { type: String, default: mongoose.Types.ObjectId },
                username: { type: String },
                post: { type: Object },
                main_post: { type: Boolean }

            });

            postModel = mongoose.model('posts', userPost);

        }


        const post_instance = new postModel();

        post_instance.username = data.username;
        post_instance.main_post = true;
        post_instance.post = {

            post_message: data.post_message,
            datetime: require('moment')(),

        };


        try {

            var posted = await post_instance.save();

            posted && resolve(posted);

        } catch (e) {

            reject(e);

        }


    });

};

module.exports = storePost;