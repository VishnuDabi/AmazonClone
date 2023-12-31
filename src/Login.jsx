import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import './Login.css'
function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const singIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(auth => {
                navigate('/')
            })
            .catch(error => alert(error.code))
        //some fancy firebase login ......
    }
    const register = async (e) => {
        e.preventDefault();
        // console.log(auth);
        createUserWithEmailAndPassword(auth, email, password)
            // console.log(data);

            .then((auth) => {
                // it succesfully created a new user with email and password 
                console.log(auth);
                if (auth) {
                    navigate('/')
                }
            }).catch(error => alert(error.code))
        // do some fancy firebase register ......
    }
    return (
        <div className='login'>
            <Link to=''>
                <img className='login__logo'
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" />
            </Link>
            <div className="login__container">
                <h1>sign-in</h1>
                <form >
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    <button type='submit' onClick={singIn}
                        className='login__signInButton' >Sign In</button>
                </form>
                <p> By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
                    Sale. Please see our Privacy Notice, our Cookies Notice and our
                    Interest-Based Ads Notice.</p>
                <button className="login__registerButton" onClick={register}>
                    Create your Amazon Account
                </button>
            </div>
        </div>

    )
}

export default Login