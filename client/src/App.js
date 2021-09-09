import React, { useState, useEffect } from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter as Router, useHistory, Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getPostsBySearch } from './actions/postSearch';
import { getContracts } from './actions/contract';
import { AuthProvider } from './context/AuthContext';

import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import Authentication from './components/authentication/authentication';
import Project from './components/project/project';
import PostPage from './components/postPage/postPage';
import SearchResults from './components/searchResults/searchResults';
import ContactUs from './components/contact-us/contact-us';
import ContractPage from './components/contractPage/contractPage';
import ChatPage from './components/chatPage/chatPage';
import ChatRoom from './components/chatRoom/chatRoom';
import AdminLanding from './components/admin-landing/admin-landing';
import AdminContracts from './components/admin-contracts/admin-contracts';
import AdminAllUsers from './components/admin-allusers/admin-allusers';
import Footer from './components/webapp-footer/webapp-footer';

import useStyles from './styles.js';

const App = () => {
    const classes = useStyles();
    const currentUser = JSON.parse(localStorage.getItem('profile'));
    const [user, setUser] = useState(currentUser);
    const [contracts, setContracts] = useState();
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

    useEffect(() => {
        dispatch(getContracts())
    }, [contracts])

    return (  
        <Router>
            <Container className={classes.root} maxWidth="xl">
                <Navbar />
                <AuthProvider>
                <Switch>
                    <Route path="/" exact component={() => <Redirect to="/posts" />} />
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
                        <Route path="/chat" render={() => <ChatPage setCurrentId={setCurrentId} setUser={setUser} />} />
                        <Route path="/chat-room" exact component={ChatRoom} />
                    <Route path="/contract" render={() => <ContractPage currentId={currentId} setCurrentId={setCurrentId} />} />
                    <Route path="/add" render={() => <Project currentId={currentId} setCurrentId={setCurrentId} />} />
                    <Route path="/edit/:id" render={() => <Project currentId={currentId} setCurrentId={setCurrentId} />} />
                    
                    <Route path="/admin-landing" render={() => <AdminLanding />} />
                    <Route path="/view-contracts" render={() => <AdminContracts />} />
                    <Route path="/view-users" render={() => <AdminAllUsers />} />
                    <Route path="/posts" exact component={Footer} />
                </Switch>
                </AuthProvider>
            </Container>
        </Router>
    );
}

export default App;