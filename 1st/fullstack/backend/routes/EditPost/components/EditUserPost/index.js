const EditUserPost = (data) => {


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

        var new_post_message = {

            post_message: data.post_message,
            datetime: require('moment')()

        };

        try {


            var edit_post = await postModel.findOneAndUpdate(

                {

                    post_id: data.post_id,
                    username: data.username

                },

                {

                    $set: {

                        post: new_post_message


                    }

                }


            );



        } catch (e) {

            reject(e);

        }


        resolve(edit_post);


    });


};

module.exports = EditUserPost;