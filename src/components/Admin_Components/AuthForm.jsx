import React, {useState} from 'react'
import axios from "axios";

const AuthForm = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function postAuth() {
        const user = {
            email: email,
            password: password,
        }
        axios.post('https://everyplayer-back.herokuapp.com/api/v1/users/signIn', user).then(res => {
            console.log(res);
            console.log(res.data);
        })
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