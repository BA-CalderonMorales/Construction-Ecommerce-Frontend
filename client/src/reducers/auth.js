import * as actionTypes from '../constants/actionTypes';

const authReducer = (state = { authData: null }, action) => {
    switch (action.type) {
        case actionTypes.ADMIN_AUTH:
            // setting the data for the login inside of the local storage
            localStorage.setItem('profile', JSON.stringify({ ...action?.response.data }));
            return { ...state, authData: action?.response.data, loading: false, errors: null }; 
        case actionTypes.AUTH:
            // setting the data for the login inside of the local storage
            localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
            
            return { ...state, authData: action?.data, loading: false, errors: null }; 
        case actionTypes.LOGOUT:
            // clearing all data inside of localStorage
            localStorage.clear();
            
            return { ...state, authData: null, loading: false, errors: null}
        default:
            return state;
    }
}

export default authReducer;