/**
 * Created by hea on 1/25/18.
 */
import axios from 'axios';
import {constants} from '../constants'

const setError= function(dispatch,error) {
    dispatch({
        type: "setError",
        payload: error
    });
}
//https://github.com/gaearon/redux-thunk

export const fetchAll=function(id){
    return function(dispatch, getState){
        return dispatch(fetchJob(id)).then(function () {
            //const uri = getState().job.statusId;
            //console.log(uri);
            //after fetching job, the job state will contain the id we need(now no match id), then get uri to call
            dispatch(fetchDealer());
            dispatch(fetchCustomer());
            dispatch(fetchVehicle());
            dispatch(fetchBooking());
            dispatch(fetchVHC());
        });
    }
}

export const fetchJob= function (id) {
    return function (dispatch) {
        return axios.get(constants.jobFetchUri+id).then(function (response) {
            /*
            if not dispatch job action, just resolve the job response for later use
             return Promise.resolve(response);
             */
            //console.log(response);
            return dispatch( {
                type: "fetchJob",
                payload: response
            });

        }).catch(function (error) {
            setError(dispatch,error);
        });
    }

};


export const fetchDealer= function () {
    return function (dispatch) {
        return axios.get(constants.dealerFetchUri).then(function (response) {
            return dispatch( {
                type: "fetchDealer",
                payload: response
            });
        }).catch(function (error) {
            setError(dispatch,error);
        });
    }

};

export const fetchCustomer= function () {
    return function (dispatch) {
        return axios.get(constants.customerFetchUri).then(function (response) {
            return dispatch( {
                type: "fetchCustomer",
                payload: response
            });
        }).catch(function (error) {
            setError(dispatch,error);
        });
    }
};

export const fetchVehicle= function () {
    return function (dispatch) {
        return axios.get(constants.vehicleFetchUri).then(function (response) {
            return dispatch( {
                type: "fetchVehicle",
                payload: response
            });
        }).catch(function (error) {
            setError(dispatch,error);
        });
    }
};

export const fetchBooking= function () {
    return function (dispatch) {
        return axios.get(constants.bookingFetchUri).then(function (response) {
            return dispatch( {
                type: "fetchBooking",
                payload: response
            });
        }).catch(function (error) {
            setError(dispatch,error);
        });
    }
};

export const fetchVHC= function () {
    return function (dispatch) {
        return axios.get(constants.vhcFetchUri).then(function (response) {
            return dispatch( {
                type: "fetchVHC",
                payload: response
            });
        }).catch(function (error) {
            setError(dispatch,error);
        });
    }
};


