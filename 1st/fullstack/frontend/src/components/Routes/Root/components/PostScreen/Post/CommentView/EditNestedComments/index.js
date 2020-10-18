import GetNestedComments from '../GetNestedComments';

const EditNestedComments = (username, post_id, new_post_message, nested_comments, set_comments) => {

    return new Promise(async (resolve, reject) => {

        try {


            if (window.fetch) {

                var response = await fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/edit_post`, {

                    method: "POST",
                    headers: {

                        'Content-Type': 'application/x-www-form-urlencoded',

                    },
                    body: `username=${username}&&post_id=${post_id}&&post_message=${new_post_message}`

                });


                var post_edited = await response.json();

                if (post_edited.status === 'success') {

                    var new_edited_comments = JSON.parse(JSON.stringify(nested_comments));

                    new_edited_comments[post_id].post.post_message = new_post_message;

                    set_comments(new_edited_comments);

                    resolve();

                } else {

                    alert(post_edited.message);

                    resolve();

                }


            }


        } catch (e) {

            reject(e);


        }


    });


};

export default EditNestedComments;