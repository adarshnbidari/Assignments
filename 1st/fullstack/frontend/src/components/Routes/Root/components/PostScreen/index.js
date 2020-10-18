import React, { Fragment, useEffect, useState } from 'react';

import GetPosts from './GetPosts';

import Post from './Post';

import PostMessage from './PostMessage';

import './css/index.css';

const PostScreen = (props) => {

    var [posts, set_posts] = useState({});

    useEffect(() => { //get all user's post

        (async () => {

            var result = await GetPosts(props.username, set_posts);


        })();


    }, []);


    const post_message = async () => {

        var new_post_message = window.prompt('enter new message to post');

        if (new_post_message) {

            await PostMessage(props.username, new_post_message, GetPosts, set_posts);

        }

    };

    return (

        <Fragment>

            <div id="post_screen">

                {

                    Object.keys(posts).reverse().map((current_post) => {

                        return <Post set_posts={set_posts} username={props.username} post_data={posts[current_post]} key={current_post} />


                    })


                }

                <div id="post_message_btn_container">

                    <button id="post_message_btn" onClick={post_message}>POST</button>

                </div>


            </div>


        </Fragment>

    );


};


export default PostScreen;