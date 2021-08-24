import { FETCH_ALL, CREATE, UPDATE, LIKE, DISLIKE, DELETE } from '../constants/actionTypes';

export default (posts = [], action) => {
    switch (action.type) {
        case UPDATE:
        case LIKE:
        case DISLIKE:
            return posts.map((post) => (post._id === action.payload._id) ? action.payload : post); // Update only where the ids match
        case DELETE: 
            return posts.filter((post) => post._id !== action.payload); // Return all the posts, except for the one that has the id
        case FETCH_ALL:
            return action.payload; // Return all.
        case CREATE:
            return [...posts, action.payload]; // Create new.
        default:
            return posts;
    }
}