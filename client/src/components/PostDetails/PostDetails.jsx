import React, { useEffect } from 'react';
import { Paper, Typography, CircularProgress, Divider, Container } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory, Link } from 'react-router-dom';
import { getPostsBySearch } from '../../actions/postSearch';
import { getPost } from '../../actions/postDetails';

import RecommendedPosts from '../RecommendedPosts/Recommendations';
import moment from 'moment';
import useStyles from './styles';
import FileBase from 'react-file-base64';
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
        console.log(id);
        return (
            <Paper elevation={6} className={classes.loadingPaper}>
                <CircularProgress size="7rem" />
            </Paper>
        )
    }

    const recommendedPosts = posts.filter(({ _id }) => _id !== post._id);

    return (  
        <Paper style={{ padding: '20px', borderRadius: '15px' }} elevation={6}>
            <div className={classes.card}>
                <div className={classes.section}>
                    <Typography variant="h3" component="h2">{post.title}</Typography>
                    <Typography gutterBottom variant="h6" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
                    <Typography gutterBottom variant="body1" component="p">{post.message}</Typography>
                    <Typography variant="h6">Created by: {post.name}</Typography>
                    <Typography variant="body1">{moment(post.createdAt).fromNow()}</Typography>
                    <Divider style={{ margin: '20px 0' }} />
                    <Typography variant="body1"><strong>Realtime Chat - coming soon!</strong></Typography>
                    <Divider style={{ margin: '20px 0' }} />
                    <Typography variant="body1"><strong>Comments - coming soon!</strong></Typography>
                    <Divider style={{ margin: '20px 0' }} />
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

// const PostDetails = () => {
//     const { post, posts, isLoading } = useSelector((state) => state.posts);
//     const history = useHistory();
//     const dispatch = useDispatch();
//     const classes = useStyles();



    
//    
    




//     // const openPost = (_id) => history.push(`/posts/${_id}`);

//     const recommendedPosts = posts.filter(({_id}) => _id !== post._id);

//     return (
//         <Paper style={{ padding: '20px', borderRadius: '15px' }} elevation={6}>
//             <div className={classes.card}>
//                 <div className={classes.section}>
//                 <Typography variant="h3" component="h2">{post.title}</Typography>
//                 <Typography gutterBottom variant="h6" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
//                 <Typography gutterBottom variant="body1" component="p">{post.message}</Typography>
//                 <Typography variant="h6">Created by: {post.name}</Typography>
//                 <Typography variant="body1">{moment(post.createdAt).fromNow()}</Typography>
//                 <Divider style={{ margin: '20px 0' }} />
//                 <Typography variant="body1"><strong>Realtime Chat - coming soon!</strong></Typography>
//                 <Divider style={{ margin: '20px 0' }} />
//                 <Typography variant="body1"><strong>Comments - coming soon!</strong></Typography>
//                 <Divider style={{ margin: '20px 0' }} />
//                 </div>
//                 <div className={classes.imageSection}>
//                 <img className={classes.media} src={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.title} />
//                 </div>
//             </div>
//             {/* {recommendedPosts.length && (
//                 <div className={classes.section}>
//                     <Typography gutterBottom variant="h5">You might also like:</Typography>
//                     <Divider />
//                     <div className={classes.recommendedPosts}>
//                         {recommendedPosts.map(({ title, name, message, likes, dislikes, selectedFile, _id }) => (
//                         <div style={{ margin: '20px', cursor: 'pointer' }} onClick={() => openPost(_id)} key={_id}>
//                             <Typography gutterBottom variant="h6">{title}</Typography>
//                             <Typography gutterBottom variant="subtitle2">{name}</Typography>
//                             <Typography gutterBottom variant="subtitle2">{message}</Typography>
//                             <Typography gutterBottom variant="subtitle1">Likes: {likes.length}</Typography>
//                             <Typography gutterBottom variant="subtitle1">Dislikes: {dislikes.length}</Typography>
//                             <img src={selectedFile} width="200px" />
//                         </div>
//                         ))}
//                     </div>
//                 </div>
//             )} */}
//         </Paper>
//     )
// }

// export default PostDetails
