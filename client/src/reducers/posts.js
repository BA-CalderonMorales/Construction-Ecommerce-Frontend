import { FETCH_ALL, FETCH_BY_SEARCH, CREATE, UPDATE, LIKE, DISLIKE, DELETE } from '../constants/actionTypes';

export default (state = [], action) => {
    switch (action.type) {
        case UPDATE:
        case LIKE:
        case DISLIKE:
            return { ...state, posts: state.map((post) => (post._id === action.payload._id) ? action.payload : post) }; // Update only where the ids match
        case DELETE: 
            return { ...state, posts: state.filter((post) => post._id !== action.payload) }; // Return all the posts, except for the one that has the id
        case FETCH_ALL:
            return {
                ...state,
                posts: action.payload.data, 
                currentPage: action.payload.currentPage, 
                numberOfPages: action.payload.numberOfPages
            }; // Return specific groups.
        case FETCH_BY_SEARCH:
            return { ...state, posts: action.payload };
        case CREATE:
            return { ...state, posts: [...state.posts, action.payload] }; // Create new.
        default:
            return state;
    }
}