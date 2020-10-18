const PostMessage = (username, new_post_message, GetPosts, set_posts) => {

    return new Promise(async (resolve, reject) => {


        try {


            if (window.fetch) {

                var response = await fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/save_post`, {

                    method: "POST",
                    headers: {

                        'Content-Type': 'application/x-www-form-urlencoded',

                    },
                    body: `username=${username}&&post_message=${new_post_message}`

                });


                var save_post = await response.json();

                if (save_post.status === 'success') {

                    await GetPosts(username, set_posts);

                    resolve();

                } else {

                    alert(save_post.message);

                    console.log(save_post);

                    resolve();

                }


            }


        } catch (e) {

            reject(e);


        }


    });


};

export default PostMessage;