import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid, Paper, AppBar, TextField, Button } from '@material-ui/core';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getPostsBySearch } from '../../actions/posts.js';
import useStyles from './styles.js';
import ChipInput from 'material-ui-chip-input';

import Posts from '../Posts/Posts';
import Form from '../Form/Form';
import Footer from '../Footer/Footer';
import Pagination from '../Pagination/Pagination';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Home = () => {
    const [currentId, setCurrentId] = useState(null);
    const [user, setUser] = useState(null);
    const [search, setSearch] = useState('');
    const [tags, setTags] = useState([]);

    const dispatch = useDispatch();
    const query = useQuery();
    const history = useHistory();
    const page = query.get('page') || 1; // Sent to Pagination as props.
    const searchQuery = query.get('searchQuery');
    
    const classes = useStyles();
    
    const searchPost = (e) => {
        if (search.trim() || tags) {
            dispatch(getPostsBySearch({ search, tags: tags.join(',') })); // [tagOne, tagTwo] = 'tagOne,tagTwo'
            history.push(`/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`);
        } else {
            history.push('/');
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
        <Grow in>
            <Container maxWidth="xl">
                <Grid className={classes.gridContainer} container justifyContent="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={6} md={9}>
                        <Posts setCurrentId={setCurrentId} setUser={setUser} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} >
                        <AppBar className={classes.appBarSearch} position="static" color="inherit">
                            <TextField onKeyDown={handleKeyPress} name="search" variant="outlined" label="Search Projects" fullWidth value={search} onChange={(e) => setSearch(e.target.value)} />
                            <ChipInput 
                                style={{ margin: '1rem 0' }}
                                value={tags}
                                onAdd={(chip) => handleAdd(chip)}
                                onDelete={(chip) => handleDelete(chip)}
                                label="Search Tags"
                                variant="outlined"
                            />
                            <Button onClick={searchPost} className={classes.searchButton} variant="contained" focusVisible color="primary">Search</Button>
                        </AppBar>
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                        {!searchQuery && !tags.length && (
                            <Paper className={classes.pagination} elevation={6}>
                                <Pagination page={page} />
                            </Paper>
                        )}
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    );
}
 
export default Home;