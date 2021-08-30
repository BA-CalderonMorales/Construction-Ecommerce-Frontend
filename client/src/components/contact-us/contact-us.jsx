import React, { useState, useEffect } from 'react';
import { Paper, Container, Grid, TextField, Divider, Typography, Button, InputLabel } from '@material-ui/core';
import useStyle from './styles.js';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import dotenv from 'dotenv';
dotenv.config();

const initialValues = {
    to_name: 'mcllc402@gmail.com',
    from_name: '', // Name of Customer
    message: '', // Message from Customer
    reply_to: '' // Customer Email
}

const notify = () => toast("Your Message Was Sent Successfully");
const error = () => toast("Sorry! Please attempt to send that again.");

const Sent = () => {
    return (
        <>
            {notify()}
            <ToastContainer />
        </>
    );
}

const SendAgain = () => {
    return (
        <>
            {error()}
            <ToastContainer />
        </>
    );
}

const ContactUs = () => {
    const SERVICE_ID = "service_nfoek1q";
    const TEMPLATE_ID = "template_19dcnn5";
    const USER_ID = "user_JpUTsDg4jWeu1DG3BXoSW";
    const [values, setValues] = useState(initialValues);
    const classes = useStyle();
    const [result, showResult] = useState(false);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    }

    const sendEmail = (e) => {
    
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
        .then((result) => {
                console.log(result)
        }, (error) => {
            return (
                console.log(error)
            );
        });
        e.target.reset();
        setValues({
            ...values, 
            to_name: 'mcllc402@gmail.com',
            from_name: '', // Name of Customer
            message: '', // Message from Customer
            reply_to: '' // Customer Email
        })
        showResult(true);
    }

    return (
        <>
            <Paper>
                <Container maxWidth="xl" className={classes.root}>
                    <Grid item xs={12}>
                        <Typography variant="h3" className={classes.root}>Contact Our Team</Typography>
                    </Grid>
                </Container>
                <Container maxWidth="xl" className={classes.root}>
                    <form autoComplete="off" noValidate className={classes.root} onSubmit={sendEmail}>
                        <Grid container>
                            <Grid item xs={8}>
                                <Divider />
                            </Grid>
                            <Grid item xs={12} sm={12} md={8} lg={6} xl={4}>
                                <InputLabel>Name</InputLabel>
                                <TextField onChange={handleChange} variant="outlined" name="from_name" label="Full Name" value={values.from_name}></TextField>
                                <InputLabel>Email</InputLabel>
                                <TextField onChange={handleChange} variant="outlined" name="reply_to" label="Email" value={values.reply_to}></TextField>
                                <InputLabel>Message</InputLabel>
                                <TextField onChange={handleChange} variant="outlined" name="message" label="Message" value={values.message} multiline rows={5}></TextField>
                                <Button type="submit" variant="contained" color="primary">Send Email</Button>
                            </Grid>
                        </Grid>
                    </form>
                </Container>
            </Paper>
        </>
    )
}

export default ContactUs
