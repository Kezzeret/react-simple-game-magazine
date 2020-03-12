import React, {useState} from 'react'
import axios from "axios";
import { useCookies } from 'react-cookie';

const AuthForm = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cookies, setCookie] = useCookies(['token']);

    function postAuth() {
        const user = {
            email: email,
            password: password,
        }
        fetch("https://everyplayer-back.herokuapp.com/api/v1/users/signIn", {
            method:'POST',
            credentials: 'include',
            headers: {
                'content-type': 'application/json',
                'origin': "https://everyplayer-frontend.herokuapp.com"
            },
            body: JSON.stringify({
                email: "admin@admin.ru",
                password: "Qwerty1234"
            })
        })
            .then(response => {
                console.log(response);
                console.log( response.headers.entries());
            })
            .catch(err => {
                console.log(err);
            });
        /*
        let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwZXJtaXNzaW9ucyI6WyJjb21tZW50IiwibW9kZXJhdG9yIl0sImVtYWlsIjoiYWRtaW5AYWRtaW4ucnUiLCJuaWNrTmFtZSI6IkFkbWluIiwiaWF0IjoxNTgzOTYyNDE3LCJleHAiOjE1ODQ1NjcyMTd9.qTDoGTBu8dNQEOXVfMI6H9NqhN4EiYFlVtBmuJdnZbo';
        setCookie('token', token, { path: '/' });
        axios({
            url: 'https://everyplayer-back.herokuapp.com/api/v1/users/signIn',
            method: 'post',
            headers: {
                'Access-Control-Allow-Origin': 'https://everyplayer-back.herokuapp.com/',
            },
            data: user,
            withCredentials: true
        }).then(res => {
            console.log(res);
            console.log(res.data);
            console.log(res.headers["set-cookies"])
        });

         */
        /*
        axios.post('https://everyplayer-back.herokuapp.com/api/v1/users/signIn', user).then(res => {
            console.log(res);
            console.log(res.data);
            console.log(res.headers["set-cookies"])
        });
        axios({
            url: 'https://everyplayer-back.herokuapp.com/api/v1/users/signIn',
            method: 'post',
            data: user,
        }).then(res => {
            console.log(res);
            console.log(res.data);
            console.log(res.headers["set-cookies"])
        });
        
         */
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