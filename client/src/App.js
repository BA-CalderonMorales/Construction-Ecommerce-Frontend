import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Authentication from './components/Authentication/Authentication';
import Footer from './components/Footer/Footer';
import useStyles from './styles.js';

const App = () => {
    const classes = useStyles();
    
    return (  
        <Router>
            <Container className={classes.root} maxWidth="xl">
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/auth" exact component={Authentication} />
                </Switch>
                {/* 
                Note To Self (Or anyone reading this: if you leave the og 
                components in here while using them in <Route .../>, your
                app will not work. So just comment them out, or delete them.)
                    <Home />
                    <Footer /> 
                */} 
            </Container>
        </Router>
    );
}

export default App;