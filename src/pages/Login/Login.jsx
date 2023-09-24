import React from 'react'
import firebase from 'firebase'
import style from './Login.module.css'
import logo from './../../media/logo google.png'
import { auth } from '../../tools/firebase'
const Login = () => {

    const loginfuncion = () => {
        auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
    }

    return (
        <div className={style.loginPage} >
            <div className={style.loginBox}>
                <h2>
                    welcome to my chat room
                </h2>
                <div onClick={loginfuncion} className={style.loginBtn}>
                    <img src={logo} alt="" />
                    <span>Sign in with google</span>
                </div>
            </div>
        </div>
    )
}

export default Login
