import React, { Fragment, useEffect, useState } from 'react';

import ReplyToNestedComment from './ReplyToNestedComment';

import GetNestedComments from './GetNestedComments';

import DeleteNestedComments from './DeleteNestedComments';

import EditNestedComments from './EditNestedComments';

import './css/index.css';

const Comment = (props) => {

    var [nested_comments, set_nested_comments] = useState({});


    const reply_to_comment = async () => {

        var replied_message = window.prompt('enter a reply message');

        if (replied_message) {

            await ReplyToNestedComment(props.username, props.comment_data.post_id, replied_message, set_nested_comments);

        }

    };

    const delete_comment = async () => {

        await DeleteNestedComments(props.username, props.comment_data.post_id, props.previous_comment, props.previous_set_comment);

    };


    const edit_nested_comments = async () => {

        var edited_nested_message = window.prompt('enter a new message');

        if (edited_nested_message && props.previous_comment) {

            await EditNestedComments(props.username, props.comment_data.post_id, edited_nested_message, props.previous_comment, props.previous_set_comment);

        }

    };

    const show_nested_comments = async () => {

        await GetNestedComments(props.username, props.comment_data.post_id, set_nested_comments);


    };

    return (

        <Fragment>

            <div className="comment_section">

                {

                    props.comment_data.post.post_message

                }

                {

                    props.comment_data.username === props.username

                        ? <div><button onClick={edit_nested_comments}>Edit</button><button onClick={delete_comment}>Delete</button></div>

                        : <div><button onClick={reply_to_comment}>Reply</button></div>


                }

                {

                    Object.keys(nested_comments).length < 1

                        ?
                        (
                            <div><button onClick={show_nested_comments}>Show Comments &nbsp; &#8595;</button></div>

                        )

                        : null

                }

                {

                    Object.keys(nested_comments).length > 0

                        ? (

                            Object.keys(nested_comments).map(current_comment => {


                                return <Comment
                                    {...props}
                                    previous_comment={nested_comments}
                                    previous_set_comment={set_nested_comments}
                                    key={current_comment}
                                    comment_data={nested_comments[current_comment]}
                                />


                            })

                        )
                        : null

                }

            </div>

        </Fragment>


    );


};

export default Comment;