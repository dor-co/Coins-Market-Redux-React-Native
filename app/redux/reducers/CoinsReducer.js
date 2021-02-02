import { COINS_REQUEST, COINS_SUCCESS, COINS_FAILURE } from '../actions/types';

const initialState = { //the state of the app
    isFetching: false,
    errorMessage: '',
    coins: []
};

const CoinsReducer = (state = initialState, action) => {
    switch (action.type) {
        case COINS_REQUEST: //fetch coins request
            return { ...state, isFetching: true };
        case COINS_FAILURE: //failure to get the data from Api
            return { ...state, isFetching: false, errorMessage: action.payload };
        case COINS_SUCCESS: //success to get the data from Api
            return { ...state, isFetching: false, coins: action.payload };
        default:
            return state;    
    }
};

export default CoinsReducer;