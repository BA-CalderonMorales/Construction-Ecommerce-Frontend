import React, { useState } from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import { adminLogin } from '../../actions/adminAuth.js';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Input from './input.js';
import useStyles from './styles';
import Icon from './icon';

const initialState = { 
    name: 'Mario', 
    username: '', 
    password: '', 
    image: 'https://drive.google.com/file/d/1wI5xISpKtCo-XNdDRVhnqIqnfVJ0qmBD/view?usp=sharing' 
}

const Admin = () => {
    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState(initialState);

    const dispatch = useDispatch(); 
    const history = useHistory();

    const handleShowPassword = () => setShowPassword(
        // Allows the user to see the password they're typing in.
        (prevShowPassword) => !prevShowPassword
    )

    const handleSubmit = (e) => {
        e.preventDefault(); // prevent reload on submit
        dispatch(adminLogin(formData, history));
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }


    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}> {/* Makes a white div that allows you to place things in. Super tidy */}
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5">Admin Sign In</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Input name="username" label="Username" handleChange={handleChange} type="text" />
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        Sign In
                    </Button>
                </form>
            </Paper>
        </Container>
    );
}

export default Admin;
