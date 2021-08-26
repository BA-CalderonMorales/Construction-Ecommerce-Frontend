import React from 'react';
import Post from './Post/Post';
import useStyles from './styles';  
import { useSelector } from 'react-redux';
import { Grid, CircularProgress } from '@material-ui/core';

const Posts = ({ setCurrentId, setUser }) => {
    const classes = useStyles();
    // Inside of reducers, index.js, it is state.posts.
    const { posts } = useSelector((state) => state.posts); // [] => { isLoading, numPages, posts: [] }
    if (posts?.creator) {
        setUser(posts.creator);
    } else {
        setUser('');
    }

    console.log(posts);
    return (  
        !posts?.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3} >
                { posts.map((post) => (
                    <Grid key={post._id} item xs={12} sm={12} md={6} lg={4}>
                        <Post post={post} setCurrentId={setCurrentId} />
                    </Grid>
                ))}
            </Grid>
        )
        
    );
}
 
export default Posts;