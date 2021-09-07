import { ADMIN_AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const adminLogin = (formData, router) => async (dispatch) => {
    try {
        // login in the user...
        const { data } = await api.adminLogin(formData);
        
        let response = await api.adminData(data.token);
        
        dispatch({ type: ADMIN_AUTH, response });

        router.push('/');
    } catch (error) {
        console.log(error);
    }
}