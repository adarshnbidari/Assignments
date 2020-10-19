const init = (data) => {

    return new Promise(async (resolve, reject) => {

        try {


            var get_post_comments = require('./get_post_comments/index.js');

            var post_comments = await get_post_comments({

                username: data.username,
                post_id: data.post_id

            });

            resolve({

                status: post_comments.length > 0 ? 'success' : 'failed',
                message: post_comments.length > 0 ? 'successfully fetched comments' : 'unable to fetch comments or not comments available',
                data: post_comments.length > 0 ? post_comments : null

            });


        } catch (e) {

            reject(e);

        }

    });

};


module.exports = init;