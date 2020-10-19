const DeleteUserDatabase = (data) => {

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

            var get_parent_id = await postModel.findOne({ post_id: data.post_id });


            if (get_parent_id && get_parent_id.post.parent_post_id) {

                var get_parent_data = await postModel.findOne({ post_id: get_parent_id.post.parent_post_id });

                var new_parent_comments = [];


                for (let i of get_parent_data.post.comments) {

                    if (i == data.post_id) {

                        continue;

                    }

                    new_parent_comments.push(i);

                }

                var new_parent_post_data = get_parent_data.post;
                new_parent_post_data.comments = new_parent_comments;

                await postModel.findOneAndUpdate(

                    {

                        post_id: get_parent_id.post.parent_post_id

                    },
                    {

                        $set: {

                            post: new_parent_post_data

                        }

                    }

                );

                var delete_reply_post = await postModel.findOneAndDelete({

                    username: data.username,
                    post_id: data.post_id

                });

                resolve(delete_reply_post);

            } else {


                var delete_reply_post = await postModel.findOneAndDelete({

                    username: data.username,
                    post_id: data.post_id

                });

                resolve(delete_reply_post);


            }



        } catch (e) {

            reject(e);

        }


    });


};


module.exports = DeleteUserDatabase;