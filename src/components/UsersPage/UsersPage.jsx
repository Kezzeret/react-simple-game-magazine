import React from 'react';
import './UsersPage.css'
import * as axios from "axios";

const UsersPage = (props) =>
{
    if (1 != 0) {
        axios.get('http://134.209.138.34/items').then(response => {
            debugger
        });

    }
    return <div className='usersPage'>
        users
    </div>
}

export default UsersPage