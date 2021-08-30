import { CREATE_CONTRACT, START_LOADING, END_LOADING } from '../constants/actionTypes';
import * as api from '../api/index.js';

// Action Creators: functions that return actions.

export const createContract = (contract) => async (dispatch) => {
    try {
        dispatch({type: START_LOADING });

        console.log(contract.customerPriceProposal);

        contract.customerPriceProposal = Number(contract.customerPriceProposal);
        
        contract.location = Number(contract.location);

        const { data } = await api.createContract(contract);
        
        // action : type, payload
        dispatch({ type: CREATE_CONTRACT, payload: data });
        
        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error);
    }
}