import { START_LOADING, END_LOADING, GET_CONTRACTS, CREATE } from '../constants/actionTypes';

export default (state = { isLoading: true, contracts: [] }, action) => {
    switch (action.type) {
        case START_LOADING:
            return { ...state, isLoading: true };
        case END_LOADING:
            return { ...state, isLoading: false };
        case GET_CONTRACTS:
            return { 
                ...state, 
                contracts: action.payload.data, 
                isLoading: false }
        case CREATE:
            return { ...state, contracts: [...state.contracts, action.payload] };  // Create new.
        default:
            return state;
    }
}