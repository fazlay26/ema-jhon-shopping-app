import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/shop">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                {/* <Link to="/Login">Login</Link> */}
                {user ? <button onClick={() => signOut(auth)}>signOut</button> : <Link to={'/Login'}>Login</Link>}
                <Link to="/Signup">Signup</Link>
            </div>
        </nav>
    );
};

export default Header;