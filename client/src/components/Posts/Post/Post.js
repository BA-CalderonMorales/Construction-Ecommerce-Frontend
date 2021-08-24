import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import MoreHorizon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deletePost, likePost, dislikePost } from '../../../actions/posts';
import useStyles from './styles.js';

const Post = ({ post, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();


    return (  
        <Card className={classes.card}>
            
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
            
            <div className={classes.overlay}>
                <Typography variant="h6">{post.creator}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            
            <div className={classes.overlay2}>
                <Button style={{color: 'white'}} size="small" onClick={() => setCurrentId(post._id)}>
                    <MoreHorizon fontSize="medium" />
                </Button>
            </div>
            
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">{post.tags.map((tag) => `#${tag} `)}</Typography>
            </div>
            
            <Typography className={classes.title} variant="h5" gutterBottom>{post.title}</Typography>
            
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p" gutterBottom>{post.message}</Typography>
            </CardContent>
            
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}>
                    <ThumbUpAltIcon fontSize="small" />
                    &nbsp; {/* Space between like icon and count */}
                    {post.likeCount}
                </Button>
                <Button size="small" color="primary" onClick={() => dispatch(dislikePost(post._id))}>
                    <ThumbDownAltIcon fontSize="small" />
                    &nbsp; {/* Space between dislike icon and count */}
                    {post.dislikeCount}
                </Button>
                <Button size="small" color="secondary" onClick={() => dispatch(deletePost(post._id))}>
                    <DeleteIcon fontSize="small" />
                </Button>
            </CardActions>
        
        </Card>
    );
}
 
export default Post;