import {COINS_REQUEST, COINS_SUCCESS, COINS_FAILURE} from './types';

export const coinsRequest = () => ({
    type: COINS_REQUEST
});

export const coinsSuccess = (json) => ({
    type: COINS_SUCCESS,
    payload: json
});

export const coinsFailure = (error) => ({
    type: COINS_FAILURE,
    payload: error
});

export const fetchCoins = () => { 
    return async dispatch => {
        dispatch(coinsRequest()); //fetch coins request, send the type COINS_REQUEST to CoinsReducer - spinner is true 
        try{ //try to get the data from Api
            let response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
            let json = await response.json();
            console.log(json);
            dispatch(coinsSuccess(json)); //success to get the data from Api, send the type COINS_SUCCESS to CoinsReducer - spinner is false and get the coins array
        }catch{
            dispatch(coinsFailure(error)); //failure to get the data from Api, send the type COINS_FAILURE to CoinsReducer - spinner is false and get error message
        }
    }
}