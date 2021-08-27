import { START_LOADING, END_LOADING, FETCH_ALL, FETCH_BY_SEARCH, CREATE, UPDATE, LIKE, DISLIKE, DELETE } from '../constants/actionTypes';

export default (state = { isLoading: true, posts: [] }, action) => {
    switch (action.type) {
        case START_LOADING:
            return { ...state, isLoading: true };
        case END_LOADING:
            return { ...state, isLoading: false };
        case UPDATE:
        case LIKE:
        case DISLIKE:
            return { ...state, posts: state.posts.map((post) => (post._id === action.payload._id) ? action.payload : post) };  // Update only where the ids match
        case DELETE: 
            return { ...state, posts: state.posts.filter((post) => post._id !== action.payload) }; // Return all the posts, except for the one that has the id
        case FETCH_ALL:
            return {
                ...state,
                posts: action.payload.data, 
                currentPage: action.payload.currentPage, 
                numberOfPages: action.payload.numberOfPages,
            }; // Return specific groups.
        case FETCH_BY_SEARCH:
            return { ...state, posts: action.payload.data };
        case CREATE:
            return { ...state, posts: [...state.posts, action.payload] };  // Create new.
        default:
            return state;
    }
}