import React, { useState, useEffect } from 'react';
import { Container, Grid, AppBar, Toolbar, Typography, Avatar, ButtonGroup, Button } from '@material-ui/core';
import useStyles from './styles';
import memories from '../../images/tools-and-utensils.svg';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts';
import decode from 'jwt-decode';

const Navbar = () => {
    const classes = useStyles();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    
    const dispatch = useDispatch();
    const history = useHistory(); 
    const location = useLocation();

    const goToContact = () => {
        history.push('/contact-us');
    }
    
    const goToPosts = () => {
        dispatch(getPosts());
        history.push('/posts');
    }
    
    const goToContract = () => {
        history.push('/contract');
    }
    
    const logout = () => {
        localStorage.clear();
        history.push('/auth'); // Push back to the login/signup screen
        setUser(null);
    }
    
    const login = () => {
        history.push('/auth');
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
        <Container className={classes.navSection} maxWidth="xl">
            <AppBar className={classes.navBar} position="static" color="inherit">
                <Link to="/" className={classes.brandContainer}>
                    <Typography className={classes.heading} variant="h4">
                        Mares Construction&nbsp;&nbsp;
                        <img className={classes.image} src={memories} alt="icon" height="40" />
                    </Typography>
                </Link>
                <Toolbar className={classes.toolbar}>
                    {user ? (
                        <>
                            <div className={classes.toolbar}>
                                <Avatar className={classes.avatar} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                                <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                            </div>
                            <ButtonGroup variant="text" aria-label="text button group">
                                <Button className={classes.button} onClick={goToContact}>Contact Us</Button>
                                <Button className={classes.button} onClick={goToPosts}>Projects</Button>
                                <Button className={classes.button} onClick={goToContract}>Contract Us</Button>
                                <Button className={classes.button} onClick={logout}>Logout</Button>
                            </ButtonGroup>
                        </>
                    ) 
                    : (
                        <ButtonGroup variant="text" aria-label="text button group">
                            <Button className={classes.button} onClick={goToContact}>Contact Us</Button>
                            <Button className={classes.button} onClick={goToPosts}>Projects</Button>
                            <Button className={classes.button} onClick={goToContract}>Contract Us</Button>
                            <Button className={classes.button} onClick={login}>Sign In</Button>
                        </ButtonGroup>
                    )}
                </Toolbar>
            </AppBar>
        </Container>
    );
}
 
export default Navbar;