import React from 'react';
import Post from './post/post';
import useStyles from './styles';  
import { useDispatch, useSelector } from 'react-redux';
import { Grid, CircularProgress } from '@material-ui/core';
import { getPosts } from '../../actions/posts';
import { Redirect } from 'react-router-dom';

const Posts = ({ setCurrentId, setUser }) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    // Inside of reducers, index.js, it is state.posts or state.isLoading, we destructure here to manipulate.
    const { posts, isLoading } = useSelector((state) => state.posts); // [] => { isLoading, numPages, posts: [] }

    if (!posts.length && !isLoading) {
        dispatch(getPosts());
        return (
            <Redirect to="/posts" />
        )
    } else {
        if (posts?.creator) {
            setUser(posts.creator);
        } else {
            setUser('');
        }
    }


    return (  
        isLoading ? <CircularProgress /> : (
            <Grid className={classes.mainContainer} container alignItems="stretch" spacing={3} >
                { posts?.map((post) => (
                    <Grid key={post._id} item xs={12} sm={12} md={6} lg={3}>
                        <Post post={post} setCurrentId={setCurrentId} />
                    </Grid>
                ))}
            </Grid>
        )
        
    );
}
 
export default Posts;