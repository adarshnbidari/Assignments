const GetNestedComments = (username, post_id, set_comments) => {

    return new Promise(async (resolve, reject) => {

        try {


            if (window.fetch) {

                var response = await fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/get_comments`, {

                    method: "POST",
                    headers: {

                        'Content-Type': 'application/x-www-form-urlencoded',

                    },
                    body: `username=${username}&&post_id=${post_id}`

                });


                var post_comments = await response.json();

                if (post_comments.status === 'success') {


                    var new_comment_list = {};

                    post_comments.data.forEach(current_comment => {

                        new_comment_list[current_comment.post_id] = current_comment;

                    });


                    console.log('comments got are');

                    console.log(new_comment_list);

                    set_comments(new_comment_list);

                    resolve();

                } else {
                    
                    //set_comments({});

                    alert(post_comments.message);

                    resolve();

                }


            }


        } catch (e) {

            reject(e);


        }


    });


};

export default GetNestedComments;