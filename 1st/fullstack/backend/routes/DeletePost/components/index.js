const init = (data) => {

    return new Promise(async (resolve, reject) => {

        try {

            var delete_post = require('./DeleteUserDatabase/index.js');

            var delete_status = await delete_post({

                username: data.username,
                post_id: data.post_id

            });


            resolve({

                status: delete_status ? 'success' : 'failed',
                message: delete_status ? 'successfully deleted the post' : 'unable to delete the post or post is unavailable'


            });

        } catch (e) {

            reject(e);

        }


    });


};

module.exports = init;