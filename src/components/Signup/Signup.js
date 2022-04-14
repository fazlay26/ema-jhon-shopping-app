import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import './Signup.css'
import auth from '../../firebase.init';

const Signup = () => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [confrimPass, setConfrimPass] = useState('')
    const [error, setError] = useState('')
    const [signInWithGoogle, googleUser] = useSignInWithGoogle(auth);
    const [sendEmailVerification] = useSendEmailVerification(auth);
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth) //1.auth ta firebase.init.js theke anbo ar useCreateUserWithEmailAndPassword eta react firebase hooks theke anbo
    let navigate = useNavigate(); //react router theke import korbo
    const handlerEmail = e => {
        setEmail(e.target.value)
    }
    const handlerPass = e => {
        setPass(e.target.value)
    }
    const handlerConfirmPass = e => {
        setConfrimPass(e.target.value)
    }

    useEffect(() => { //memory leak er ekta error dito jar karone useffect er moddhe ei kaaj ta kora.
        if (user) { //jodi user pao jai tahole take amra shop component e pathai dibo.user pao jao mane holo signup hoya.
            navigate('/shop')

        }
    })
    if (googleUser) {
        navigate('/shop')
    }
    const handlerCreateUser = (e) => {
        e.preventDefault() //submit button e click korle jaate reload na hoy

        if (pass !== confrimPass) {
            setError('your two passwords did not match');
            return;
        }
        if (pass.length < 6) { //password string tai pass.length
            setError("password must be 6 digit or longer")
        }

        createUserWithEmailAndPassword(email, pass) // 2.ekhn signup korle user er info firebase authentication e jabe
        // await sendEmailVerification();
        // alert('Sent email');
        verfiyEmail()
    }
    const verfiyEmail = async () => {
        await sendEmailVerification();
        alert('Sent email');
    }
    const hadnlerGoogleSignIn = () => {
        signInWithGoogle()
    }
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Sign Up</h2>
                <form onSubmit={handlerCreateUser}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handlerEmail} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlerPass} type="password" name="password" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input onBlur={handlerConfirmPass} type="password" name="password" id="" required />
                    </div>
                    <p>
                        {error}
                    </p>



                    <input className='form-submit' type="submit" value="Sign Up" />
                </form>
                <p>
                    Already Have an Account? <Link className='form-link' to="/login">Login</Link>
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
            </div>
        </div>
    );
};

export default Signup;