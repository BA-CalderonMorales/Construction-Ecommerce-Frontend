import React from 'react';
import { Container, Grow, Grid, Paper, AppBar, Typography } from '@material-ui/core';
import { useLocation, useHistory } from 'react-router-dom';
import useStyles from './styles.js';

import SearchBar from '../searchBar/searchBar'
import Posts from '../posts/posts';
import Pagination from '../pagination/pagination';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Home = ({ setCurrentId, setUser, handleKeyPress, search, setSearch, handleAdd, handleDelete, tags, searchPost }) => {
    const query = useQuery();
    const page = query.get('page') || 1; // Sent to Pagination as props.
    const searchQuery = query.get('searchQuery');
    const classes = useStyles();

    return ( 
        <Grow in>
            <Container maxWidth="xl">
                <Grid item container >
                    <AppBar variant="contained" position="static" color="inherit">
                        <SearchBar 
                            handleKeyPress={handleKeyPress} 
                            search={search} 
                            setSearch={setSearch} 
                            handleAdd={handleAdd} 
                            handleDelete={handleDelete} 
                            tags={tags} 
                            searchPost={searchPost} 
                        />
                    </AppBar>
                </Grid>
                <Grid item xs={12} className={classes.gridContainer}>
                    <Typography variant="h3" className={classes.root}>Welcome To Our Project Portal</Typography>
                </Grid>
                <Grid className={classes.gridContainer} container justifyContent="center"spacing={2}>
                    <Grid item fullWidth xs={12} sm={12} md={6} lg={6} >
                        {!searchQuery && !tags.length && (
                            <Pagination page={page} />
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