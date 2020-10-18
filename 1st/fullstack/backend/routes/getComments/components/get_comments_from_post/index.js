const get_comments_from_post = (data) => {

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

            var get_comments = await postModel.findOne({ post_id: data.post_id });

        } catch (e) {

            reject(e);

        }


        var comment_list = [];

        if (get_comments.post.comments && get_comments.post.comments.length > 0) {

            var maxComments = get_comments.post.comments.length;

            get_comments.post.comments.forEach(async current_element => {

                maxComments--;

                try {

                    var get_comment_post = await postModel.findOne({ post_id: current_element });

                } catch (e) {

                    reject(e);

                }

                if (get_comment_post) {

                    comment_list.push(get_comment_post);

                }

                if (maxComments === 0) {

                    resolve(comment_list);

                }


            });



        } else {

            resolve(comment_list);

        }


    });


};


module.exports = get_comments_from_post;