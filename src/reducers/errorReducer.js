/**
 * Created by hea on 2/6/18.
 */
const initialState={};

function errorReducer(preState= initialState, action) {
    switch (action.type) {
        case "setError":
            console.log(action.payload);
            return {
                error: preState.error||""+action.payload
            };
        default:
            return preState;
    }
}

export default errorReducer;