import React, {useState} from 'react'
import axios from "axios";
import {useCookies} from 'react-cookie';

const AuthForm = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function postAuth() {
        const user = {
            email: email,
            password: password,
        }

        fetch("/api/v1/users/signIn", {
            method: 'POST',
            credentials: 'include',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                email: "admin@admin.ru",
                password: "Qwerty1234"
            })
        })
            .then(response => {
                console.log(response);
                console.log(response.headers.entries());
            })
            .catch(err => {
                console.log(err);
            });
    }

    return (
        <div>
            <label>email</label>
            <input type='text' name='email' value={email} onChange={event => setEmail(event.target.value)}/>
            <label>password</label>
            <input type='text' name='password' value={password} onChange={event => setPassword(event.target.value)}/>
            <button onClick={postAuth}>Login</button>
        </div>
    )
}

export default AuthForm;