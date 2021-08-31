import React from 'react'
import { Button, TextField, Grid } from '@material-ui/core';
import ChipInput from 'material-ui-chip-input';
import useStyles from './styles.js';
import { useHistory } from 'react-router-dom';

const SearchBar = ({ handleKeyPress, search, setSearch, handleAdd, handleDelete, tags, searchPost }) => {
    const classes = useStyles();
    const history = useHistory();

    const addProject = () => {
        history.push('/add');
    }
    
    return (
        <>            
            <Grid container className={classes.searchBar} alignItems="center" justifyContent="center" spacing={1}>
                <Grid item xs={12} sm={4} md={5} lg={5} >
                    <TextField onKeyDown={handleKeyPress} fullWidth name="search" variant="outlined" label="Search Projects" value={search} onChange={(e) => setSearch(e.target.value)} />
                </Grid>
                <Grid item xs={12} sm={3} lg={5}>
                    <ChipInput 
                        fullWidth
                        style={{ margin: '1rem 0' }}
                        value={tags}
                        onAdd={(chip) => handleAdd(chip)}
                        onDelete={(chip) => handleDelete(chip)}
                        label="Search Tags"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} sm={2} md={3} lg={2} className={classes.searchButton}>
                    <Button onClick={searchPost} focusVisible><i className="fas fa-search fa-2x"></i></Button>
                    <Button onClick={addProject} focusVisible>Add a Project</Button>
                </Grid>
            </Grid>
        </>
    )
}

export default SearchBar