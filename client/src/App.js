import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid, BottomNavigation } from '@material-ui/core';

import { useDispatch } from 'react-redux';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';

import { getPosts } from './actions/posts';
import useStyles from './styles';
import memories from './images/tools-and-utensils.svg';


const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const [user, setUser] = useState(null);
    // const [isClicked, setIsClicked] = useState(false);
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {
        dispatch(getPosts());
        // setIsClicked(false);
    }, [currentId, dispatch]); // isClicked, 

    return (  
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">{user ? `Hello, ${user}` : "Enter your name in Creator"}</Typography>
                <img className={classes.image} src={memories} alt="icon" height="60" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid className={classes.appBar.mainContainer} container justifyContent="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId} setUser={setUser} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
            <BottomNavigation className={classes.footer}>
                <Container variant="contained">
                    <Grid item xs={12} sm={12}>
                        <Typography variant="body3" align="center">                
                            Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
                        </Typography>
                    </Grid>
                </Container>
            </BottomNavigation>
        </Container>
    );
}

export default App;