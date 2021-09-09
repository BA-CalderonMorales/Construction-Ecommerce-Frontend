import React from 'react'
import { Link } from 'react-router-dom';
import './button.css';

const Button = () => {
    return (
        <Link to='/auth'>
            <button className='btn'>Login</button>
        </Link>
    )
}

export default Button
