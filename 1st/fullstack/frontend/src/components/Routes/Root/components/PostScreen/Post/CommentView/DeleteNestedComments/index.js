import GetNestedComments from '../GetNestedComments';

const DeleteNestedComments = (username, post_id, nested_comments, set_comments) => {

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

                    var new_deleted_comment_list = JSON.parse(JSON.stringify(nested_comments));

                    delete new_deleted_comment_list[post_id];

                    set_comments(new_deleted_comment_list);

                    resolve();


                } else {

                    set_comments(nested_comments);

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

export default DeleteNestedComments;