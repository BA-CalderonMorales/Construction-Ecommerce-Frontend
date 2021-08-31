import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { ChatEngine } from 'react-chat-engine';
import { auth } from '../firebase/firebase';
import { useAuth } from '../../context/AuthContext';
import { Paper, CircularProgress } from '@material-ui/core';
import useStyles from './styles';
import axios from 'axios';

const ChatRoom = () => {
    const projectId = process.env.REACT_APP_CHAT_ENGINE_ID;
    const key = process.env.REACT_APP_CHAT_ENGINE_KEY;
    const history = useHistory();
    const { user } = useAuth();
    const [loading, setLoading] = useState(true);
    const classes = useStyles();
    console.log(user);

    const handleLogout = async () => {
        await auth.signOut();
        history.push("/")
    }

    const getFile = async (url) => {
        const response = await fetch(url);
        const data = await response.blob(); // images that need to be transferred over in binary format.

        return new File([data], "userPhoto.jpg", {type: 'image/jpeg'});
    }

    useEffect(() => {
        if (!user) {
            history.push('/');
            return;
        }
        axios.get('https://api.chatengine.io/users/me', {
            headers: {
            "project-Id": projectId,
            "user-name": user.email,
            "user-secret": user.uid
            }
        })
        .then(() => { setLoading(false) })
        .catch(() => {
            let formData = new FormData();
            formData.append('email', user.email);
            formData.append('username', user.email);
            formData.append('secret', user.uid);

            getFile(user.photoURL)
                .then((avatar) => {
                formData.append('avatar', avatar, avatar.name);

                axios.post('https://api.chatengine.io/users/',
                    formData,
                    { headers: { "private-key": key } }
                )
                .then(() => setLoading(false))
                .catch((error) => console.log(error));
            })
        })
    }, [user, history])

    if (!user || loading) {
        return (
            <Paper elevation={6} className={classes.loadingPaper}>
                <CircularProgress size="7rem" />
            </Paper>
        );
    }

    return (
        <div className="chats-page">
            <div className="nav-bar">
                <div className="logo-tab">
                    Hello!
                </div>
                <div onClick={handleLogout} className="logout-tab">
                    Logout
                </div>
            </div>

            <ChatEngine
                height="calc(100vh - 66px)"
                projectID={projectId}
                userName={user.email}
                userSecret={user.uid}
            />

        </div>
    );
}

export default ChatRoom;
