import react, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import useStyles from './styles';  
import { createPost, updatePost } from '../../actions/posts';


const Form = ({ currentId, setCurrentId }) => {
    
    // Placeholder form data to fill and then post with new values.
    const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
    // Fetching the data for the updated posts.
    const post = useSelector((state) => (currentId !== null) ? state.posts.find((message) => message._id === currentId) : null);
    const dispatch = useDispatch();
    const classes = useStyles();
    
    useEffect(() => {
        if (post) {
            setPostData(post);
        }
    }, [post])
    
    const clear = () => {
        setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' })
        setCurrentId(0);
    }

    const handleChange = async (e) => {
        console.log([e.target.name]);
        console.log(e.target.value);
        setPostData({ ...postData, [e.target.name]: e.target.value })
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (currentId) {
            dispatch(updatePost(currentId, postData));
            clear();
        }
        else {
            dispatch(createPost(postData)); 
            clear(); // Then clear the form.
        }
    }


    return (  
        <Paper className={classes.paper} > { /* Paper is like a div with a white-ish background */ }
        {console.log(currentId)}
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit} >
                <Typography variant="h6">{currentId ? `Editing "${post.title}"` : 'Creator'}</Typography>
                <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={handleChange} />
                <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={handleChange} />
                <TextField name="message" variant="outlined" label="Message" fullWidth value={postData.message} onChange={handleChange} />
                <TextField name="tags" variant="outlined" label="#tags" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
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