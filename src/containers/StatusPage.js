/**
 * Created by hea on 1/29/18.
 */

/**
 * Created by hea on 1/25/18.
 */

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { fetchAll } from '../actions/index';
import DealerTitle from '../components/DealerTitle';
import CustomerSection from '../components/CustomerSection';
import StatusBar from '../components/StatusBar';
import DealerFooter from '../components/DealerFooter';
import VehicleHealthCheck from  '../components/VehicleHealthCheck';
import SummarySection from '../components/SummarySection'
import { getURLParameterByName } from '../constants'

class StatusPage extends Component{
    constructor(props){
        super(props);

        let id=getURLParameterByName("id")||"e80ee659-df6b-45d9-885f-34a07370fdb1";
        console.log("id:"+id);
        this.props.fetchAll(id);


    }



    render(){
        let page=null;
        if(this.props.job.statusValue){
            switch (this.props.job.statusValue){
                case "Authorise":
                    page=
                        [   <DealerTitle  key="DealerTitle"/>,
                            <StatusBar key="StatusBar"/>,
                            <VehicleHealthCheck key="VehicleHealthCheck" />,
                            <CustomerSection key="CustomerSection"/>,
                            <DealerFooter key="DealerFooter"/>]
                    ;break
                case "Collect":
                    page=
                        [   <DealerTitle  key="DealerTitle"/>,
                            <StatusBar key="StatusBar"/>,
                            <SummarySection key="SummarySection"/>,
                            <VehicleHealthCheck key="VehicleHealthCheck" />,
                            <DealerFooter key="DealerFooter"/>]
                    ;break
                default:
                    page=
                        [   <DealerTitle  key="DealerTitle"/>,
                            <StatusBar key="StatusBar"/>,
                            <CustomerSection key="CustomerSection"/>,
                            <DealerFooter key="DealerFooter"/>]
                    ;break
            }
        }

        if(this.props.error.error){
            page=<div className="errorMsg">{this.props.error.error}</div>;
        }
        return(
            <div className="main">
                {page}
            </div>
        );
    }
}

//use this to call action creater in class by props
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchAll: fetchAll}, dispatch);
}
//use this to get app state in class by props
function mapStateToProps(state){
    return {job:state.job, error: state.error};//just maintain only one level of state/ otherwise you can't get the child obj props
}

export default connect(mapStateToProps,mapDispatchToProps) (StatusPage);