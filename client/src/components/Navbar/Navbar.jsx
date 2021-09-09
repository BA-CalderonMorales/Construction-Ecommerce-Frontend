import React, { Component, Fragment, useState, useEffect } from 'react';
import { Container, Grid, AppBar, Toolbar, Typography, Avatar, ButtonGroup, Button } from '@material-ui/core';
import useStyles from './styles';
import memories from '../../images/tools-and-utensils.svg';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts';
import decode from 'jwt-decode';

import Nav from './nav';

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const classes = useStyles();

    const dispatch = useDispatch();
    const history = useHistory(); 
    const location = useLocation();
    
    const logout = () => {
        localStorage.clear();
        history.push('/auth'); // Push back to the login/signup screen
        setUser(null);
    }

    useEffect(() => {
        const token = user?.token;
        if (token) {
            const decodedToken = decode(token);
            if (decodedToken.exp * 1000 < new Date().getTime()) {
                logout();
            }
        }
        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    return (
        <>
            <Nav user={user} classes={classes} logout={logout} />
        </>  
    );
}
 
export default Navbar;