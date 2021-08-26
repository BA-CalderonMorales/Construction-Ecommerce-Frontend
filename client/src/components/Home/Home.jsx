import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid, Paper, AppBar, TextField, Button } from '@material-ui/core';
import { useHistory, useLocation } from 'react-router-dom';
import ChipInput from 'material-ui-chip-input';

import Posts from '../Posts/Posts';
import Form from '../Form/Form';
import Footer from '../Footer/Footer';
import Pagination from '../Pagination/Pagination';

import { useDispatch } from 'react-redux';
import { getPosts, getPostsBySearch } from '../../actions/posts.js';

import useStyles from './styles.js';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Home = () => {
    const [currentId, setCurrentId] = useState(null);
    const [user, setUser] = useState(null);
    const [search, setSearch] = useState('');
    const [tags, setTags] = useState([]);

    const dispatch = useDispatch();
    const history = useHistory();
    const query = useQuery();

    const page = query.get('page') || 1;
    const searchQuery = query.get('searchQuery');
    
    const classes = useStyles();

    const handleKeyPress = (e) => {
        if (e.keyCode === 13) {
            // KeyCode 13 == Enter Key
            searchPost();
        }
    }

    const searchPost = (e) => {
        if (search.trim() || tags) {
            dispatch(getPostsBySearch({ search, tags: tags.join(',') }));
            history.push(`/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`);
        } else {
            history.push('/');
        }
    }

    const handleAdd = (tag) => setTags([ ...tags, tag ]);

    const handleDelete = (tagToDelete) => setTags(tags.filter((tag) => tag !== tagToDelete ));

    return ( 
        <Grow in>
            <Container maxWidth="xl">
                <Grid className={classes.gridContainer} container justifyContent="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={6} md={9}>
                        <Posts setCurrentId={setCurrentId} setUser={setUser} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <AppBar className={classes.appBarSearch} position="static" color="inherit">
                            <TextField name="search" variant="outlined" label="Search Memories" fullWidth value={search} onChange={(e) => setSearch(e.target.value)} onKeyPress={handleKeyPress} />
                            <ChipInput 
                                style={{ margin: '1rem 0' }}
                                value={tags}
                                onAdd={(chip) => handleAdd(chip)}
                                onDelete={(chip) => handleDelete(chip)}
                                label="Search Tags"
                                variant="outlined"
                            />
                            <Button onClick={searchPost} className={classes.searchButton} variant="contained" color="primary">Search</Button>
                        </AppBar>
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                        <Paper elevation={6}>
                            <Pagination page={page} />
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    );
}
 
export default Home;