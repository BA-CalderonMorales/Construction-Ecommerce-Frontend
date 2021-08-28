import React from 'react'
import { Button, TextField, Grid } from '@material-ui/core';
import ChipInput from 'material-ui-chip-input';
import useStyles from './styles.js';

const SearchBar = ({ handleKeyPress, search, setSearch, handleAdd, handleDelete, tags, searchPost, addAProject }) => {
    const classes = useStyles();
    
    return (
        <>            
            <Grid container alignItems="center" justifyContent="center" spacing={2}>
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
                <Grid item xs={12} sm={1} md={1} lg={1}>
                    <Button onClick={searchPost} className={classes.searchButton} focusVisible><i className="fas fa-search fa-2x"></i></Button>
                </Grid>
                <Grid item xs={12} sm={1} md={1} lg={1}>
                    <Button onClick={addAProject} focusVisible>Add a Project</Button>
                </Grid>
            </Grid>
        </>
    )
}

export default SearchBar