const GetPosts = (username, set_posts) => {

    return new Promise(async (resolve, reject) => {

        try {


            if (window.fetch) {

                var response = await fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/get_posts`, {

                    method: "POST",
                    headers: {

                        'Content-Type': 'application/x-www-form-urlencoded',

                    },
                    body: `username=${username}`

                });

                var user_posts = await response.json();

                if (user_posts && user_posts.status === 'success') {

                    var client_post_data = {};

                    user_posts.data.forEach(current_post => {

                        client_post_data[current_post.post_id] = current_post;

                    });

                    set_posts(client_post_data);

                    resolve(client_post_data);


                } else {

                    set_posts({});
                    resolve(false);


                }


            }


        } catch (e) {

            reject(e);


        }


    });


};

export default GetPosts;