import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import PostDetails from './components/PostDetails/PostDetails';
import Authentication from './components/Authentication/Authentication';
import Footer from './components/Footer/Footer';

import useStyles from './styles.js';

const App = () => {
    const classes = useStyles();
    const user = JSON.parse(localStorage.getItem('profile'));


    return (  
        <Router>
            <Container className={classes.root} maxWidth="xl">
                <Navbar />
                <Switch>
                    <Route path="/" exact component={() => <Redirect to="/posts" />} />
                    <Route path="/posts" exact component={Home} />
                    <Route path="/posts/search" exact component={Home} />
                    <Route path="/posts/:id" component={PostDetails} />
                    <Route path="/auth" exact component={() => (!user ? <Authentication /> : <Redirect to="/posts" />)} />
                </Switch>
            </Container>
            {/* 
            Note To Self (Or anyone reading this: if you leave the og 
            components in here while using them in <Route .../>, your
            app will not work. So just comment them out, or delete them.)
                <Home />
                <Footer /> 
            */} 
        </Router>
    );
}

export default App;