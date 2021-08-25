import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';

import Posts from '../Posts/Posts';
import Form from '../Form/Form';
import Footer from '../Footer/Footer';

import useStyles from './styles.js';

import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts.js';

const Home = () => {
    // const [isClicked, setIsClicked] = useState(false);
    const [currentId, setCurrentId] = useState(null);
    const [user, setUser] = useState(null);
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {
        // setIsClicked(false);
        dispatch(getPosts());
    }, [currentId, dispatch]); // isClicked, 

    return ( 
        <Grow in>
            <Container>
                <Grid className={classes.mainContainer} container justifyContent="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <Posts setCurrentId={setCurrentId} setUser={setUser} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    );
}
 
export default Home;