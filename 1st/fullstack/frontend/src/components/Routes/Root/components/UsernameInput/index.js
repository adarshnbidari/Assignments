import React, { Fragment } from 'react';

import './css/index.css';

const UsernameInput = (props) => {

    const login = (e) => {

        e.preventDefault();

        var username = document.querySelector("#username").value;

        if (username) {

            props.set_username(username);

        }

    };

    return (

        <Fragment>

            <form id="username_input_section">

                <input type="text" id="username" placeholder="enter your username" />

                <button type="submit" id="login" onClick={login}>Login</button>

            </form>

        </Fragment>

    );


};

export default UsernameInput;