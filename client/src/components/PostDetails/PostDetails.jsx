import React, { useEffect } from 'react';
import { Paper, Typography, CircularProgress, Divider, Container } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory, Link } from 'react-router-dom';
import { getPostsBySearch } from '../../actions/postSearch';
import { getPost } from '../../actions/postDetails';

import RecommendedPosts from '../recommendedPosts/recommendations';
import moment from 'moment';
import useStyles from './styles';
import '@fortawesome/fontawesome-free/js/all.js';


const PostDetails = () => {    
    // Placeholder form data to fill and then post with new values.
    const { post, posts, isLoading } = useSelector((state) => state.posts);

    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getPost(id));
    }, [id]);

    useEffect(() => {
        if (post) {
            dispatch(getPostsBySearch({ search: 'none', tags: post?.tags.join(',') }));
        }
    }, [post])

    if (!post) {
        return null;
    }

    if (isLoading) {
        return (
            <Paper elevation={6} className={classes.loadingPaper}>
                <CircularProgress size="7rem" />
            </Paper>
        )
    }

    const recommendedPosts = posts.filter(({ _id }) => _id !== post._id);

    return (  
        <Paper style={{ padding: '20px'}}>
            <div className={classes.card}>
                <div className={classes.section}>
                    <Typography variant="h3" component="h2">{post.title}</Typography>
                    <Typography gutterBottom variant="h6" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
                    <Typography gutterBottom variant="body1" component="p">{post.message}</Typography>
                    <Typography variant="h6">Created by: {post.name}</Typography>
                    <Typography variant="body1">{moment(post.createdAt).fromNow()}</Typography>
                </div>
                <div className={classes.imageSection}>
                    <img className={classes.media} src={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.title} />
                </div>
            </div>
            <Container className={classes.recommendedSection} maxWidth="fit-content" spacing={0}> 
                <RecommendedPosts recommendedPosts={recommendedPosts} />
            </Container>
        </Paper>
    );

}
 
export default PostDetails;