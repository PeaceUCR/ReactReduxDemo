/**
 * Created by hea on 1/25/18.
 */
export const constants={
    jobFetchUri: "https://mocksvc.mulesoft.com/mocks/77911fa7-1596-45b6-872c-edec1476b443/jobs.ownership.services/api/jobs/",
    dealerFetchUri: "https://mocksvc.mulesoft.com/mocks/7cb0a8d0-5d97-4df1-939b-ac65786db8c2/dealers.ownership.services/api/dealers/dee41d65-95b2-4d8b-84bf-3c1e569a0908",
    customerFetchUri: "https://mocksvc.mulesoft.com/mocks/0827ffdd-f403-460d-a0d9-e17e09f9b161/customers.ownership.services/api/customers/cecb349c-f551-11e7-8c3f-9a214cf093ae/",
    statusFetchUri: "https://mocksvc.mulesoft.com/mocks/e0c3cf10-1554-451b-90fa-9449aacb6d0c/jobs.ownership.services/api/jobs/e80ee659-df6b-45d9-885f-34a07370fdb1",
    vehicleFetchUri:"https://mocksvc.mulesoft.com/mocks/681dc68a-54df-49e6-b4c6-f121f947101c/vehicles.ownership.services/api/vehicles/a259ad94-099c-478e-8bda-46c92d0b081f",
    bookingFetchUri:"https://mocksvc.mulesoft.com/mocks/55ed38b6-00bd-42b8-8945-70893cf0da73/bookings.ownership.services/api/bookings/cecb349c-f551-11e7-8c3f-9a214cf093ae",
    vhcFetchUri:"https://mocksvc.mulesoft.com/mocks/fc32735c-5972-482d-8c22-ae497a2d91d5/vhc.ownership.services/api/fae3c5b5-5d1e-4781-bc5b-253acf67e2a3"
};

export const statusValueMapping={
    "Booking":{index:1,text:"Booking", description:"You're all booked in - we look forward to seeing you 02/03/2018."},
    "CheckIn":{index:2,text:"Check in", description:"We have your car and will notify you when the work is completed."},
    "InProgress":{index:3,text:"In progress", description:"We are currently working on your car and will notify you when the work is completed."},
    "Authorise":{index:4,text:"Authorise", description:"We have completed a Vehicle Health Check.There is some additional work required."},
    "Collect":{index:5,text:"Collect", description:"We have completed a Vehicle Health Check.All work has been completed. Your car is ready."}
}

//get queryString
export  const getURLParameterByName = function(name, url){
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}