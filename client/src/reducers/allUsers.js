import { START_LOADING, END_LOADING, FETCH_ALL_USERS } from '../constants/actionTypes';

export default (state = { isLoading: true, users: [] }, action) => {
    switch (action.type) {
        case START_LOADING:
            return { ...state, isLoading: true };
        case END_LOADING:
            return { ...state, isLoading: false };
        case FETCH_ALL_USERS:
            return { 
                ...state, 
                users: action.payload.data, 
                isLoading: false 
            }
        default:
            return state;
    }
}