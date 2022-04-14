import React, { useEffect, useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, user1] = useSignInWithGoogle(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const handlerEmail = e => {
        setEmail(e.target.value)
    }
    const handlerPass = e => {
        setPass(e.target.value)
    }
    useEffect(() => { //memory leak er ekta error dito jar karone useffect er moddhe ei kaaj ta kora.
        if (user) { //jodi user pao jai tahole take amra shop component e pathai dibo.user pao jao mane holo signup hoya.
            navigate(from, { replace: true });

        }
    })
    useEffect(() => { //memory leak er ekta error dito jar karone useffect er moddhe ei kaaj ta kora.
        if (user1) { //jodi user pao jai tahole take amra shop component e pathai dibo.user pao jao mane holo signup hoya.
            navigate(from, { replace: true });

        }
    })
    const handlerUserSignIn = e => {
        e.preventDefault()
        signInWithEmailAndPassword(email, pass)
    }
    const hadnlerGoogleSignIn = () => {
        signInWithGoogle()
        // .then(() => {
        //     navigate(from, { replace: true });
        // })
    }
    const resetEmail = async () => {
        if (email) {

            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('Please Provide Your Email');
        }


    }
    return (

        <div className='form-container'>
            <div>
                <h2 className='form-title'>Login</h2>
                <form onSubmit={handlerUserSignIn}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handlerEmail} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlerPass} type="password" name="password" id="" required />
                    </div>
                    <p style={{ color: 'red' }}>{error?.message}</p>


                    <input className='form-submit' type="submit" value="Login" />
                </form>
                <p onClick={resetEmail}>Forget Your Password?<span className='reset-pass' >Reset Password</span></p>
                <p>
                    New to Ema-John? <Link className='form-link' to="/signup">Create an account</Link>
                </p>
                <div className='social-media-container'>
                    <div>
                        <p>Login With Social Media</p>
                        <ul className='social-icon'>
                            <li><img onClick={hadnlerGoogleSignIn} src="https://cdn-icons-png.flaticon.com/512/2702/2702602.png" alt="" />

                                <img src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png" alt="" /> </li>
                        </ul>
                    </div>
                </div>
                <ToastContainer
                    position="top-left" />
            </div>
        </div>

    );
};

export default Login;