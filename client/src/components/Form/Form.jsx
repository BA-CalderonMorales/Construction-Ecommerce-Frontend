import React, { useState, useEffect } from 'react';

import { Container, Divider, Grid, TextField, Button, Typography, Paper, InputLabel } from '@material-ui/core';
import { createPost, updatePost } from '../../actions/posts';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import FileBase from 'react-file-base64';
import useStyles from './styles';  


const Form = ({ currentId, setCurrentId }) => {    
    // Placeholder form data to fill and then post with new values.
    const [postData, setPostData] = useState({ title: '', message: '', tags: [], selectedFile: '' });
    const post = useSelector((state) => currentId ? state.posts.posts.find((message) => message._id === currentId) : null);
    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();
    const user = JSON.parse(localStorage.getItem('profile'));

    useEffect(() => {
        if (!post?.title) {
            clear();
        }
        if (post) {
            setPostData(post);
        }
    }, [post]);

    const clear = () => {
        setCurrentId(0);
        setPostData({ title: '', message: '', tags: '', selectedFile: '' })
    }

    const handleChange = async (e) => {
        setPostData({ ...postData, [e.target.name]: e.target.value })
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(e);

        if (currentId) {
            dispatch(updatePost(currentId, { ...postData, name: user?.result?.name }));
            clear();
            history.push('/posts');
        }
        else {
            dispatch(createPost({ ...postData, name: user?.result?.name })); 
            clear(); // Then clear the form.
            history.push('/posts');
        }
    }

    if (!user?.result?.name) {
        return (
            <Paper className={classes.anonUser} elevation={6}>
                <Typography variant="body2" align="center">
                    <Button variant="contained" focusVisible color="secondary" component={Link} to="/auth">Sign in to add your project</Button>
                </Typography>
            </Paper>
        );
    }

    return (  
        <Paper>
            <Container maxWidth="xl" className={classes.root}>
                <Grid item xs={12}>
                    <Typography variant="h3">{currentId ? `Editing " ${post.title} "` : 'Project'}</Typography>
                </Grid>
            </Container>
            <Container maxWidth="xl" className={classes.root}>
                <form autoComplete="off" noValidate className={classes.root} onSubmit={handleSubmit} >
                    <Grid container>
                        <Grid item xs={12} sm={12} md={8} lg={6} xl={4}>
                            <InputLabel>Project Title</InputLabel>
                            <TextField name="title" variant="standard" label="Enter a Project Title" fullWidth value={postData.title} onChange={handleChange} />
                            <InputLabel>Description</InputLabel>
                            <TextField name="message" variant="standard" label="Describe how we did here!" fullWidth multiline rows={4} value={postData.message} onChange={handleChange} />
                            <InputLabel>Project Title</InputLabel>
                            <TextField name="tags" variant="standard" label="#tags (comma,separated)" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
                            <div className={classes.fileInput}>
                                <FileBase className={classes.chooseFile} type="file" multiple={false} onDone={({base64}) => setPostData({ ...postData, selectedFile: base64 })} />
                                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                                <Button className={classes.buttonClear} variant="contained" color="secondary" size="large" onClick={clear} fullWidth>Clear</Button>
                            </div>
                        </Grid> 
                    </Grid>
                </form>
                <Divider />
            </Container>
        </Paper>
    );
}
 
export default Form;