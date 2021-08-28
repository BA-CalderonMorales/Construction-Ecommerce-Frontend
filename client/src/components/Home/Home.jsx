import React, { useState } from 'react';
import { Container, Grow, Grid, Paper, AppBar, TextField, Button, Box } from '@material-ui/core';
import { useLocation, useHistory } from 'react-router-dom';
import useStyles from './styles.js';

import SearchBar from '../SearchBar/SearchBar'
import Posts from '../Posts/Posts';
import Pagination from '../Pagination/Pagination';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Home = ({ setCurrentId, setUser, handleKeyPress, search, setSearch, handleAdd, handleDelete, tags, searchPost, addAProject }) => {
    const query = useQuery();
    const history = useHistory();
    const page = query.get('page') || 1; // Sent to Pagination as props.
    const searchQuery = query.get('searchQuery');
    const classes = useStyles();

    return ( 
        <Grow in>
            <Container maxWidth="xl">
                <Grid className={classes.gridContainer} container justifyContent="space-between" alignItems="center" spacing={2}>
                    <Grid item container >
                        <AppBar container className={classes.searchTerm} position="static" color="inherit">
                            <SearchBar 
                            handleKeyPress={handleKeyPress} 
                            search={search} 
                            setSearch={setSearch} 
                            handleAdd={handleAdd} 
                            handleDelete={handleDelete} 
                            tags={tags} 
                            searchPost={searchPost} 
                            addAProject={addAProject} />
                        </AppBar>
                    </Grid>
                    <Grid item fullWidth xs={12} sm={12} md={12} lg={12} >
                        {!searchQuery && !tags.length && (
                            <Paper className={classes.pagination} elevation={6}>
                                <Pagination page={page} />
                            </Paper>
                        )}
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        <Posts setCurrentId={setCurrentId} setUser={setUser} />
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    );
}
 
export default Home;