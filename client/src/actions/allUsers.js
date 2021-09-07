import { LOADING, NOT_LOADING, FETCH_ALL_USERS } from '../constants/actionTypes';
import * as api from '../api/index.js';

// Action Creators: functions that return actions.

export const getAllUsers = () => async (dispatch) => {
    // An action is an object that has a type and payload.
    try {
        dispatch({type: LOADING });
        // data represents the post
        const { data: { data } } = await api.fetchUsers(); // page = 1, 2, 3, ....
        // action : type, payload
        dispatch({ type: FETCH_ALL_USERS, payload: { data } });
        dispatch({ type: NOT_LOADING });
    } catch (error) {
        console.log(error);
    }
}