const reply_top_post = (data) => {

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
                main_post: { type: Boolean },

            });

            postModel = mongoose.model('posts', userPost);

        }


        var doesPostExists = await postModel.findOne({ post_id: data.post_id });

        if (doesPostExists && Object.keys(doesPostExists).length > 0) {


            var reply_post = new postModel();

            reply_post.username = data.username;

            reply_post.post = {

                post_message: data.post_message,
                main_post: false,
                datetime: require('moment')(),
                parent_post_id:data.post_id

            };
        

            try {

                var replied_to_post = await reply_post.save();

            } catch (e) {

                reject(e);

            }


            var parent_post_comments = doesPostExists.post.comments ? doesPostExists.post.comments : [];
            parent_post_comments.push(replied_to_post.post_id);

            var updated_post_comments = doesPostExists.post;
            updated_post_comments.comments = parent_post_comments;



            try {

                var update_parent_post_comments = await postModel.updateOne(

                    {

                        post_id: data.post_id,

                    },

                    {

                        $set: {

                            post: updated_post_comments

                        }

                    },

                );

            } catch (e) {

                reject(e);

            }

            resolve(update_parent_post_comments);



        } else {

            resolve({

                status: 'failed',
                message: 'invalid post_id'

            });


        }





    });

};

module.exports = reply_top_post;