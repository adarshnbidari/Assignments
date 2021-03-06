import GetNestedComments from '../GetNestedComments';

const ReplyToNestedComment = (username, post_id, new_post_message, set_comments) => {

    return new Promise(async (resolve, reject) => {

        try {


            if (window.fetch) {

                var response = await fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/reply_to_post`, {

                    method: "POST",
                    headers: {

                        'Content-Type': 'application/x-www-form-urlencoded',

                    },
                    body: `username=${username}&&post_id=${post_id}&&post_message=${new_post_message}`

                });


                var replied = await response.json();

                if (replied.status === 'success') {

                    await GetNestedComments(username, post_id,set_comments);

                    resolve();

                } else {

                    alert(replied.message);

                    resolve();

                }


            }


        } catch (e) {

            reject(e);


        }


    });


};

export default ReplyToNestedComment;