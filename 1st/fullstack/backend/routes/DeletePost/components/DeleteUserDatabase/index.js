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

            var deleteUserPost = postModel.findOneAndDelete(

                {

                    post_id: data.post_id,
                    username: data.username

                }


            );


        } catch (e) {

            reject(e);

        }


        resolve(deleteUserPost);


    });


};


module.exports = DeleteUserDatabase;