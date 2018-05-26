/**
 * Created by hea on 1/29/18.
 */
const initialState={};

function VHCReducer(preState= initialState, action) {
    switch (action.type) {
        case "fetchVHC":
            let response = action.payload.data[0];
            console.log(response);
            return {
                id: response.id,
                url: response.url,
                video: response.video,
                items: JSON.stringify(response.items)
            };
        default:
            return preState;
    }
}

export default VHCReducer;