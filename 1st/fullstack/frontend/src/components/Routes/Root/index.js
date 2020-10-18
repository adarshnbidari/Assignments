import React, { Fragment, useState } from 'react';

import UsernameInput from './components/UsernameInput';

import PostScreen from './components/PostScreen';

const Root = () => {

    var [username, set_username] = useState("");

    return (

        <Fragment>

            <UsernameInput set_username={set_username} />

            {

                username !== ""
                    ? <PostScreen username={username} />
                    : null

            }



        </Fragment>


    );


};


export default Root;