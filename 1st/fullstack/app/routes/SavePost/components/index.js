const init = (data) => {

    return new Promise(async (resolve, reject) => {

        try {

            var storePost = require('./storePost/index.js');

            var post_stored = await storePost({

                username: data.username,
                post_message: data.post_message

            });


            if (post_stored._id) {

                resolve({

                    status: 'success',
                    message: 'posted successfully',
                    data: {

                        post_id: post_stored.post_id,
                        username: post_stored.username,
                        post_data: post_stored.post

                    }

                });

            }

        } catch (e) {

            reject(e);

        }


    });


};

module.exports = init;