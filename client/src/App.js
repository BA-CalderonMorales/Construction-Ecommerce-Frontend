import React, { useState } from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter as Router, useHistory, Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getPostsBySearch } from './actions/postSearch';

import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import Authentication from './components/authentication/authentication';
import Project from './components/project/project';
import PostPage from './components/postPage/postPage';
import SearchResults from './components/searchResults/searchResults';
import ContactUs from './components/contact-us/contact-us';
import ContractPage from './components/contractPage/contractPage';

import useStyles from './styles.js';

const App = () => {
    const classes = useStyles();
    const currentUser = JSON.parse(localStorage.getItem('profile'));
    const [user, setUser] = useState(currentUser);
    const history = useHistory();
    const [currentId, setCurrentId] = useState(null);
    const [search, setSearch] = useState('');
    const [tags, setTags] = useState([]);

    const dispatch = useDispatch();
    
    const searchPost = (e) => {
        if (search.trim() || tags) {
            dispatch(getPostsBySearch({ search, tags: tags.join(',') })); // [tagOne, tagTwo] = 'tagOne,tagTwo'
            return ( 
                <Redirect to={`/postSearch/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`} />
            )
        } else {
            return ( 
                <Redirect to="/posts" />
            )
        }
    }

    const handleKeyPress = (e) => {
        if (e.keyCode === 13) {
            // KeyCode 13 == Enter Key
            searchPost(); // 'search' will also get passed down to searchPost bc it's using useState.
        }
    }
    
    const handleAdd = (tag) => setTags([ ...tags, tag ]);

    const handleDelete = (tagToDelete) => setTags(tags.filter((tag) => tag !== tagToDelete ));

    return (  
        <Router>
            <Container className={classes.root} maxWidth="xl">
                <Navbar />
                <Switch>
                    <Route path="/" exact component={() => <Redirect to="/contact-us" />} />
                    <Route path="/posts" render={() => 
                        <Home setCurrentId={setCurrentId} 
                            setUser={setUser} 
                            handleKeyPress={handleKeyPress} 
                            search={search} 
                            setSearch={setSearch} 
                            handleAdd={handleAdd} 
                            handleDelete={handleDelete} 
                            tags={tags} 
                            searchPost={searchPost} 
                        />} 
                    />
                    <Route path="/postSearch/search" render={() => <SearchResults currentId={currentId} setCurrentId={setCurrentId} setUser={setUser} />} />
                    <Route path="/postDetails/:id" render={() => <PostPage currentId={currentId} setCurrentId={setCurrentId} />} />
                    <Route path="/auth" exact component={Authentication} />
                    <Route path="/contact-us" exact component={ContactUs} />
                    <Route path="/contract" render={() => <ContractPage currentId={currentId} setCurrentId={setCurrentId} />} />}
                    <Route path="/add" render={() => <Project currentId={currentId} setCurrentId={setCurrentId} />} />
                    <Route path="/edit/:id" render={() => <Project currentId={currentId} setCurrentId={setCurrentId} />} />
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