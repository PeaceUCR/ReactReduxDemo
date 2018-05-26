/**
 * Created by hea on 1/25/18.
 */
import jobReducer from "./jobReducer"
import dealerReducer from "./dealerReducer"
import customerReducer from "./customerReducer"
import vehicleReducer from "./vehicleReducer"
import bookingReducer from "./bookingReducer"
import VHCReducer from "./VHCReducer"
import errorReducer from './errorReducer'
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

const appReducer = combineReducers({
    job:jobReducer,
    dealer:dealerReducer,
    customer: customerReducer,
    vehicle: vehicleReducer,
    booking: bookingReducer,
    vhc: VHCReducer,
    error: errorReducer,
    router: routerReducer
});

export default appReducer;