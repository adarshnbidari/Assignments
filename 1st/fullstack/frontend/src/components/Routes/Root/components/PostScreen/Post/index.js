import React, { Fragment, useState } from 'react';

import moment from 'moment';

import DeletePost from './DeletePost';

import EditPost from './EditPost';

import ReplyToPost from './ReplyToPost';

import GetComments from './GetComments';

import CommentView from './CommentView';

import './css/index.css';

const Post = (props) => {

    const [comments, set_comments] = useState({});


    const delete_post = async () => {

        try {

            await DeletePost(props.username, props.post_data.post_id, props.set_posts);

        } catch (e) {

            console.log(e);

            alert('something gone wrong');

        }


    };


    const edit_post = async () => {

        var edited_message = window.prompt("Enter new post message");

        if (edited_message) {

            await EditPost(props.username, props.post_data.post_id, edited_message, props.set_posts);

        }

    };

    const reply_to_post = async () => {

        var reply_message = window.prompt("reply to the post");

        if (reply_message) {

            await ReplyToPost(props.username, props.post_data.post_id, reply_message, props.set_posts);

        }

    };

    const show_comments = async () => {

        await GetComments(props.username, props.post_data.post_id, set_comments);

    };


    return (

        <Fragment>

            <div className="post_container">

                <div className="post_message_container">

                    <p className="post_message">{props.post_data.post.post_message}</p>

                    <p className="post_message_info">

                        {props.post_data.username === props.username ? 'You' : props.post_data.username}

                        &nbsp; &#9755; &nbsp;

                        {moment(props.post_data.post.datetime).calendar({ sameElse: "DD/MM/YYYY" })}


                    </p>

                </div>

                <div className="post_options_container">



                    {

                        props.post_data.username === props.username

                            ? <div className="post_options"><button className="post_options_button" onClick={edit_post}>Edit</button><button onClick={delete_post} className="post_options_button">Delete</button></div>

                            : <div className="post_options"><button className="post_options_button" onClick={reply_to_post}>Reply</button></div>


                    }


                </div>


                <div className="post_comments_container">

                    {

                        Object.keys(comments).length < 1

                            ?
                            (
                                <div className="post_comments_container_box"><button className="post_options_button" onClick={show_comments}>Show Comments &nbsp; &#8595;</button></div>

                            )

                            : null

                    }


                    {

                        Object.keys(comments).length > 0

                            ? (

                                Object.keys(comments).map(current_comment => {


                                    return (

                                        <CommentView
                                            previous_comment={comments}
                                            previous_set_comment={set_comments}
                                            {...props}
                                            key={current_comment}
                                            comment_data={comments[current_comment]} />

                                    )

                                })

                            )
                            : null

                    }



                </div>


            </div>

        </Fragment>

    );


};


export default Post;