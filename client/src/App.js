import React, { useState } from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter as Router, useHistory, Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getPostsBySearch } from './actions/postSearch';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import PostDetails from './components/PostDetails/PostDetails';
import Authentication from './components/Authentication/Authentication';
import Project from './components/Project/Project';
import PostPage from './components/PostPage/PostPage';
import SearchResults from './components/SearchResults/SearchResults';
import Landing from './components/Landing/Landing';

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
            // history.push(`/postSearch/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`);
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

    const addAProject = () => {
        return(
            history.push(`/add`)
        );
    }
    
    const handleAdd = (tag) => setTags([ ...tags, tag ]);

    const handleDelete = (tagToDelete) => setTags(tags.filter((tag) => tag !== tagToDelete ));

    return (  
        <Router>
            <Container className={classes.root} maxWidth="xl">
                <Navbar />
                <Switch>
                    <Route path="/" exact component={() => <Redirect to="/landing" />} />
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
                            addAProject={addAProject} 
                            />} />
                    <Route path="/postSearch/search" render={() => <SearchResults currentId={currentId} setCurrentId={setCurrentId} setUser={setUser} />} />
                    <Route path="/postDetails/:id" render={() => <PostPage currentId={currentId} setCurrentId={setCurrentId} />} />
                    <Route path="/auth" exact component={Authentication} />
                    <Route path="/landing" exact component={Landing} />
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