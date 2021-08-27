import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownAltOutlined from '@material-ui/icons/ThumbDownAltOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deletePost, likePost, dislikePost } from '../../../actions/posts';
import useStyles from './styles.js';

const Post = ({ post, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));
    const history = useHistory();

    const Likes = () => {
        if (post.likes.length > 0) {
            return post.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
            ? (
                <>
                    <ThumbUpAltIcon fontSize="small" />&nbsp;{post.likes.length > 2 ? `You and ${post.likes.length - 1} others` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}`}
                </>
            ) : (
                <>
                    <ThumbUpAltIcon fontSize="small" />&nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}
                </>
            );
        }
        return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
    }

    const Dislikes = () => {
        if (post.dislikes.length > 0) {
            return post.dislikes.find((dislike) => dislike === (user?.result?.googleId || user?.result?._id))
            ? (
                <>
                    <ThumbDownAltIcon fontSize="small" />&nbsp;{post.dislikes.length > 2 ? `You and ${post.dislikes.length - 1} others` : `${post.dislikes.length} dislike${post.dislikes.length > 1 ? 's' : ''}`}
                </>
            ) : (
                <>
                    <ThumbDownAltIcon fontSize="small" />&nbsp;{post.dislikes.length} {post.dislikes.length === 1 ? 'Dislike' : 'Dislikes'}
                </>
            );
        }
        return <><ThumbDownAltOutlined fontSize="small" />&nbsp;Dislike</>;
    }

    const Delete = (id) => {
        dispatch(deletePost(post._id));
        history.push('/');
    }

    return (  
        <Card className={classes.card} raised elevation={6}>
            
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
            
            <div className={classes.overlay}>
                <Typography variant="h6">{post.name}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            
            <div className={classes.overlay2}>
                {
                    (user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) 
                    && (
                        <Button style={{color: 'white'}} size="small" onClick={() => setCurrentId(post._id)}>
                            <MoreHorizon fontSize="medium" />
                        </Button>
                    )
                }
            </div>
            
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">{post.tags.map((tag) => `#${tag} `)}</Typography>
            </div>
            
            <Typography className={classes.title} variant="h5" gutterBottom>{post.title}</Typography>
            
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p" gutterBottom>{post.message}</Typography>
            </CardContent>
            
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" disabled={!user?.result} onClick={() => dispatch(likePost(post._id))}>
                    <Likes />
                </Button>
                <Button size="small" color="primary" disabled={!user?.result} onClick={() => dispatch(dislikePost(post._id))}>
                    <Dislikes />
                </Button>
                {
                    (user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) 
                    && (
                        <Button size="small" color="secondary" onClick={() => Delete(post._id)}> 
                            <DeleteIcon fontSize="small" />
                        </Button>
                    )
                }
            </CardActions>
        
        </Card>
    );
}
 
export default Post;