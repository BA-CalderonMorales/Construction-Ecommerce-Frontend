import * as api from '../api';

// Action Creators, functions that return actions.
export const getPosts = () => async (dispatch) => {
    // An action is an object that has a type and payload.

    try {
        // data represents the post
        const { data } = await api.fetchPosts();
        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

export const createPost = (posts) => async (dispatch) => {
    try {
        const { data } = await api.createPost(posts);

        dispatch({ type: 'CREATE', payload: data })
    } catch (error) {
        console.log(error);
    }
}