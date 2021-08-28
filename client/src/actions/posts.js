import { START_LOADING, END_LOADING, FETCH_ALL, CREATE, UPDATE, DELETE, LIKE, DISLIKE } from '../constants/actionTypes';
import * as api from '../api/index.js';

// Action Creators: functions that return actions.

export const getPosts = (page) => async (dispatch) => {
    // An action is an object that has a type and payload.
    try {
        dispatch({type: START_LOADING });
        // data represents the post
        const { data: { data, currentPage, numberOfPages } } = await api.fetchPosts(page); // page = 1, 2, 3, ....
        // action : type, payload
        dispatch({ type: FETCH_ALL, payload: { data, currentPage, numberOfPages} });
        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error);
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        dispatch({type: START_LOADING });
        const { data } = await api.createPost(post);
        // action : type, payload
        dispatch({ type: CREATE, payload: data });
        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error);
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);
        // action : type, payload
        dispatch({ type: UPDATE, payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id); // Not interested in the return data, just want to delete it.
        // action: type, payload
        dispatch({ type: DELETE, payload: id });
    } catch (error) {
        console.log(error);
    }
}

export const likePost = (id) => async (dispatch) => {
    try {
        const { data } = await api.likePost(id);
        // action : type, payload
        dispatch({ type: LIKE, payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const dislikePost = (id) => async (dispatch) => {
    try {
        const { data } = await api.dislikePost(id);
        // action : type, payload
        dispatch({ type: DISLIKE, payload: data});
    } catch (error) {
        console.log(error);
    }  
}