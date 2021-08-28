import { START_LOADING, END_LOADING, FETCH_BY_SEARCH } from '../constants/actionTypes';
import * as api from '../api/index.js';

// Action Creators: functions that return actions.

export const getPostsBySearch = (searchQuery) => async (dispatch) => {
    try {
        dispatch({type: START_LOADING });
        const { data: { data } } = await api.fetchPostsBySearch(searchQuery);

        dispatch({ type: FETCH_BY_SEARCH, payload: { data } });
        
        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error);
    }
}