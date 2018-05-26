/**
 * Created by hea on 1/26/18.
 */
const initialState={};

function vehicleReducer(preState= initialState, action) {
    switch (action.type) {
        case "fetchVehicle":
            let response = action.payload.data;
            console.log(action.payload.data);
            return {
                id: response.id,
                registration: response.registration,
                model: response.model.name,
                manufacturer: response.manufacturer.name
            };
        default:
            return preState;
    }
}

export default vehicleReducer;