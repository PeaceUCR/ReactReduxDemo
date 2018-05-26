/**
 * Created by hea on 2/2/18.
 */
import {statusValueMapping,getURLParameterByName} from '../constants'

const initialState={};


function jobReducer(preState= initialState, action) {
    switch (action.type) {
        case "fetchJob":
            let response= action.payload.data.data;
            console.log(response);
            let setting={};
            let nArray = response.notifications;
            for(let i=0;i<nArray.length;i++){
                if(nArray[i].type==="OnCompleteNotification"){
                    setting.OnCompleteNotificationMethod= nArray[i].method;
                    if(setting.OnCompleteNotificationMethod==="Email"){
                        setting.OnCompleteNotificationEmail= nArray[i].value;
                    }else{
                        setting.OnCompleteNotificationValue= nArray[i].value;
                    }
                }

                if(nArray[i].type==="InProgressNotification"){
                    setting.InProgressNotificationActive= nArray[i].active;
                    setting.InProgressNotificationMethod= nArray[i].method;
                    setting.InProgressNotificationValue= nArray[i].value;
                }
            }




            //test only
            let page = getURLParameterByName("status");
            if(page&&page.length>0&&statusValueMapping[page]){
                console.log('service status:'+page);
                response.status.value=page;
                console.log('manually change the status:'+page);
            }
            //end test

            //just maintain only one level of state/ otherwise you can't get the child obj props
            return {
                id: response.id,
                statusId: response.status.id,
                statusValue: response.status.value,
                statusDescription: response.status.description,
                OnCompleteNotificationMethod: setting.OnCompleteNotificationMethod,
                OnCompleteNotificationEmail: setting.OnCompleteNotificationEmail,
                OnCompleteNotificationValue: setting.OnCompleteNotificationValue,
                InProgressNotificationActive: setting.InProgressNotificationActive,
                InProgressNotificationMethod: setting.InProgressNotificationMethod,
                InProgressNotificationValue: setting.InProgressNotificationValue
            };
        default:
            return preState;
    }
}

export default jobReducer;