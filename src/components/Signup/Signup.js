import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css'

const Signup = () => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [confrimPass, setConfrimPass] = useState('')
    const [error, setError] = useState('')

    const handlerEmail = e => {
        setEmail(e.target.value)
    }
    const handlerPass = e => {
        setPass(e.target.value)
    }
    const handlerConfirmPass = e => {
        setConfrimPass(e.target.value)
    }
    const handlerCreateUser = e => {
        e.preventDefault()

        if (pass !== confrimPass) {
            setError('your two passwords did not match');
            return;

        }

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
            </div>
        </div>
    );
};

export default Signup;