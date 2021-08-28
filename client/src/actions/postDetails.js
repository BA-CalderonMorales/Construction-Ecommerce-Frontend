import { START_LOADING, END_LOADING, FETCH_POST } from '../constants/actionTypes';
import * as api from '../api/index.js';

// Action Creators: functions that return actions.

export const getPost = (id) => async (dispatch) => {
    // An action is an object that has a type and payload.
    try {
        dispatch({type: START_LOADING });
        // data represents the post
        const { data } = await api.fetchPost(id); // id = "fjkdslasomerandomidkfldsa"
        // action : type, payload
        dispatch({ type: FETCH_POST, payload: { post: data } });
        
        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error);
    }
}