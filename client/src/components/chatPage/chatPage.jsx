import React from 'react'
import { Grow, Grid, Container, Button, Typography, Paper } from '@material-ui/core'
import useStyles from './styles';
import { useHistory } from 'react-router-dom';

import { GoogleOutlined } from '@ant-design/icons';
import "firebase/app"
import { auth } from '../firebase/firebase';
import firebase from 'firebase/compat/app';

const ChatPage = ({ setCurrentId, setUser }) => {
    const classes = useStyles();
    const history = useHistory();

    const handleClick = () => {
        history.push('/chat-room');
    }

    return (
        <Grow in>
            <Container maxWidth="xl">
                <Paper>
                    <Grid item xs={12} className={classes.gridContainer}>
                        <Typography variant="h3" className={classes.root}>See if we're available now</Typography>
                    </Grid>
                    <Grid item xs={12} className={classes.gridContainer}>
                        <div id="login-card">
                            <h2>Chat With Mario</h2>
                            <div
                                className="login-button google"
                                onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider()) }
                            >
                                <GoogleOutlined /> Sign in with Google
                            </div>
                        </div>
                    </Grid>
                </Paper>
            </Container>
        </Grow>
    )
}

export default ChatPage
