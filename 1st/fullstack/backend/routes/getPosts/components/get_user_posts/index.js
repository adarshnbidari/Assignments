const get_user_posts = (data) => {

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

        try {


            var get_all_main_posts = await postModel.find({ main_post: true });


        } catch (e) {

            reject(e);

        }


        resolve(get_all_main_posts);


    });


};


module.exports = get_user_posts;