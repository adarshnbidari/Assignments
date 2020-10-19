const init = (data) => {

    return new Promise(async (resolve, reject) => {

        try {

            var reply_to_post = require('./ReplyToPost/index.js');

            var reply_status = await reply_to_post({

                username: data.username,
                post_id: data.post_id,
                post_message: data.post_message


            });


            resolve({


                status: reply_status.ok == 1 ? 'success' : 'failed',
                message: reply_status.ok == 1 ? 'replied' : 'reply was unsuccessfull'

            });

        } catch (e) {

            reject(e);

        }


    });

};

module.exports = init;