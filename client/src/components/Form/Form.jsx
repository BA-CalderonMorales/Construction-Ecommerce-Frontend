import React, { useState, useEffect } from 'react';

import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { createPost, updatePost } from '../../actions/posts';
import { useDispatch, useSelector } from 'react-redux';

import FileBase from 'react-file-base64';
import useStyles from './styles';  


const Form = ({ currentId, setCurrentId }) => {    
    // Placeholder form data to fill and then post with new values.
    const [postData, setPostData] = useState({ title: '', message: '', tags: '', selectedFile: '' });
    const post = useSelector((state) => (currentId !== null) ? state.posts.find((message) => message._id === currentId) : null);
    const dispatch = useDispatch();
    const classes = useStyles();
    const user = JSON.parse(localStorage.getItem('profile'));

    useEffect(() => {
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
        }
        else {
            dispatch(createPost({ ...postData, name: user?.result?.name })); 
            clear(); // Then clear the form.
        }
    }

    if (!user?.result?.name) {
        return (
            <Paper className={classes.paper}>
                <Typography variant="h6" align="center">
                    Please sign in to create your own project and like other projects.
                </Typography>
            </Paper>
        );
    }

    return (  
        <Paper className={classes.paper} > { /* Paper is like a div with a white-ish background */ }
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit} >
                <Typography variant="h6">{currentId ? `Editing " ${post.title} "` : 'Project'}</Typography>
                <TextField name="title" variant="outlined" label="Enter a Project Title" fullWidth value={postData.title} onChange={handleChange} />
                <TextField name="message" variant="outlined" label="Message" fullWidth multiline rows={4} value={postData.message} onChange={handleChange} />
                <TextField name="tags" variant="outlined" label="#tags (comma,separated)" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
                <div className={classes.fileInput}>
                    <FileBase type="file" multiple={false} onDone={({base64}) => setPostData({ ...postData, selectedFile: base64 })} />
                    <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                    <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
                </div>
            </form>
        </Paper>
    );
}
 
export default Form;