import GetPosts from '../../GetPosts/index.js';

const DeletePost = (username, post_id, set_posts) => {

    return new Promise(async (resolve, reject) => {


        try {


            if (window.fetch) {

                var response = await fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/delete_post`, {

                    method: "POST",
                    headers: {

                        'Content-Type': 'application/x-www-form-urlencoded',

                    },
                    body: `username=${username}&&post_id=${post_id}`

                });


                var post_deleted = await response.json();

                if (post_deleted.status === 'success') {

                    await GetPosts(username, set_posts);

                    resolve();


                } else {


                    console.log(post_deleted);

                    alert(post_deleted);

                    resolve();

                }


            }


        } catch (e) {

            reject(e);


        }


    });


};

export default DeletePost;