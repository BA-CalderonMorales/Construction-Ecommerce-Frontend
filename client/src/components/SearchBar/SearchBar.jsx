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
            <Grid item xs={12} sm={8} md={10} lg={10} >
                <TextField 
                    className={classes.textField}
                    autofocus
                    autoComplete={true}
                    onKeyDown={handleKeyPress} 
                    fullWidth 
                    name="search" 
                    value={search} 
                    onChange={(e) => setSearch(e.target.value)} 
                    label="Search Projects" 
                     />
                <ChipInput 
                    className={classes.textField}
                    fullWidth
                    value={tags}
                    onAdd={(chip) => handleAdd(chip)}
                    onDelete={(chip) => handleDelete(chip)}
                    label="Search Tags"
                    />
            </Grid>
            <Grid item xs={12} sm={4} md={2} lg={2} className={classes.searchButton}>
                <Button onClick={searchPost} focusVisible><i className="fas fa-search fa-2x"></i></Button>
                <Button onClick={addProject} focusVisible>Add a Project</Button>
            </Grid>     
        </>
    )
}

export default SearchBar