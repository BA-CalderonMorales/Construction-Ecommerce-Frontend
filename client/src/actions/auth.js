import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const signin = (formData, router) => async (dispatch) => {
    try {
        // login in the user...
        const { data } = await api.signIn(formData);

        dispatch({ type: AUTH, data });

        router.push('/');
    } catch (error) {
        console.log(error);
    }
}

export const signup = (formData, router) => async (dispatch) => {
    try {
        // Sign up in the user...
        const { data } = await api.signUp(formData);

        dispatch({ type: AUTH, data });
        
        router.push('/');
    } catch (error) {
        console.log(error);
    }
}