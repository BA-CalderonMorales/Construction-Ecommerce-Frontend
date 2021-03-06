import React from 'react'
import Posts from '../posts/posts';
import SearchBar from '../searchBar/searchBar';

const SearchResults = ({ setCurrentId, setUser, handleKeyPress, search, setSearch, handleAdd, handleDelete, tags, searchPost, addAProject }) => {

    return (
        <>
            <SearchBar handleKeyPress={handleKeyPress} 
                search={search} 
                setSearch={setSearch} 
                handleAdd={handleAdd} 
                handleDelete={handleDelete} 
                tags={tags} 
                searchPost={searchPost} 
                addAProject={addAProject} />
            <Posts setCurrentId={setCurrentId} setUser={setUser} />
        </>
    )
}

export default SearchResults