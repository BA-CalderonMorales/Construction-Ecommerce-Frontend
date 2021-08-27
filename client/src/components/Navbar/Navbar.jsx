import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Avatar, Button } from '@material-ui/core';
import useStyles from './styles';
import memories from '../../images/tools-and-utensils.svg';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LOGOUT } from '../../constants/actionTypes';
import decode from 'jwt-decode';

const Navbar = () => {
    const classes = useStyles();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const history = useHistory(); 
    const location = useLocation();

    const logout = () => {
        dispatch({ type: LOGOUT });
        history.push('/'); // Push back to the login/signup screen
        
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

        setUser(JSON.parse(localStorage.getItem('profile')))
        
    }, [location]);

    return (  
        <AppBar className={classes.appBar} position="static" color="inherit">
            <Link to="/" className={classes.brandContainer}>
                <Typography className={classes.heading} variant="h4">
                    User Portal&nbsp;
                </Typography>
                <img className={classes.image} src={memories} alt="icon" height="40" />
            </Link>
            <Toolbar className={classes.toolbar}>
                {user ? (
                    <div className={classes.toolbar}>
                        <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                        <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                        <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
                    </div>
                ) 
                : (
                    <Button className={classes.auth} component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
                )}
            </Toolbar>
        </AppBar>
    );
}
 
export default Navbar;