const init = (data) => {

    return new Promise(async (resolve, reject) => {

        try {

            var get_user_posts = require('./get_user_posts/index.js');

            var posts = await get_user_posts({

                username: data.username

            });

            resolve({

                status: posts.length > 0 ? 'success' : 'failed',
                message: posts.length > 0 ? 'successfully fetched posts' : 'unable to fetch posts or not posts available',
                data: posts.length > 0 ? posts : null

            });


        } catch (e) {

            reject(e);

        }


    });

};


module.exports = init;