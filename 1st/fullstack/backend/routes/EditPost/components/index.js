const init = (data) => {

    return new Promise(async (resolve, reject) => {

        try {

            var edit_post = require('./EditUserPost/index.js');

            var edit_post_status = await edit_post({

                username: data.username,
                post_id: data.post_id,
                post_message: data.post_message

            });


            resolve({

                status: edit_post_status ? 'success' : 'failed',
                message: edit_post_status ? 'successfully edited post' : 'failed to edit the post'

            });


        } catch (e) {

            reject(e);

        }


    });

};


module.exports = init;