/**
 * Created by hea on 1/25/18.
 */

const initialState={};

function dealerReducer(preState= initialState, action) {
    switch (action.type) {
        case "fetchDealer":
            let response= action.payload.data;
            console.log(response);
            return {
                id: response.id,
                name: response.name,
                branches: JSON.stringify(response.branches)
            };
        default:
            return preState;
    }
}

export default dealerReducer;