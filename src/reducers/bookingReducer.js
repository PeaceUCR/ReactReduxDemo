/**
 * Created by hea on 1/29/18.
 */
const initialState={};

function bookingReducer(preState= initialState, action) {
    switch (action.type) {
        case "fetchBooking":
            let response = action.payload.data.data;
            console.log(response);
            return {
                id: response.id,
                date: response.schedule.date,
                timeIn: response.schedule.time.in,
                timeOut: response.schedule.time.out,
                tasks: JSON.stringify(response.tasks),
                price: response.totalPrice

            };
        default:
            return preState;
    }
}

export default bookingReducer;