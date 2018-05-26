/**
 * Created by hea on 1/25/18.
 */
const initialState={};

function customerReducer(preState= initialState, action) {
    switch (action.type) {
        case "fetchCustomer":
            let response = action.payload.data;
            console.log(response);
            return {
                id: response.id,
                firstName: response.firstname,
                lastName: response.lastname,
                email: response.email,
                contactsValue: response.contacts[0].value,
                contactsName: response.contacts[0].type.name,
                contactsDescription: response.contacts[0].type.description
            };
        default:
            return preState;
    }
}

export default customerReducer;