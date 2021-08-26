import { FETCH_ALL, FETCH_BY_SEARCH, CREATE, UPDATE, DELETE, LIKE, DISLIKE } from '../constants/actionTypes';
import * as api from '../api/index.js';

// Action Creators: functions that return actions.

export const getPosts = (page) => async (dispatch) => {
    // An action is an object that has a type and payload.
    try {
        // data represents the post
        const { data: { data, currentPage, numberOfPages } } = await api.fetchPosts(page);
        console.log(data);
        
        // action : type, payload
        dispatch({ type: FETCH_ALL, payload: { data, currentPage, numberOfPages} });
    } catch (error) {
        console.log(error);
    }
}

export const getPostsBySearch = (searchQuery) => async (dispatch) => {
    try {
        const { data: { data } } = await api.fetchPostsBySearch(searchQuery);

        dispatch({ type: FETCH_BY_SEARCH, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
        // action : type, payload
        dispatch({ type: CREATE, payload: data })
    } catch (error) {
        console.log(error);
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);
        // action : type, payload
        dispatch({ type: UPDATE, payload: data})
    } catch (error) {
        console.log(error);
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id); // Not interested in the return data, just want to delete it.
        // action: type, payload
        dispatch({ type: DELETE, payload: id })
    } catch (error) {
        console.log(error);
    }
}

export const likePost = (id) => async (dispatch) => {
    try {
        const { data } = await api.likePost(id);
        // action : type, payload
        dispatch({ type: LIKE, payload: data})
    } catch (error) {
        console.log(error);
    }
}

export const dislikePost = (id) => async (dispatch) => {
    try {
        const { data } = await api.dislikePost(id);
        // action : type, payload
        dispatch({ type: DISLIKE, payload: data})
    } catch (error) {
        console.log(error);
    }  
}