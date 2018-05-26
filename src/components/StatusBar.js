/**
 * Created by hea on 1/25/18.
 */

import React, { Component } from 'react';
import {connect} from 'react-redux';
import { statusValueMapping } from "../constants";
import PropTypes from 'prop-types';

class StatusBar extends Component{

    render(){
        return(
            <div className="statusBar">
                <div className="bar">
                    <span className="status" ref="Booking" data-key="1">
                        <div className="statusNumber">{statusValueMapping["Booking"].index}</div>
                        <p className="text">{statusValueMapping["Booking"].text}</p>
                    </span>
                    <span className="divider"></span>
                    <span className="status" ref="CheckIn" data-key="2">
                        <div className="statusNumber">{statusValueMapping["CheckIn"].index}</div>
                        <p className="text">{statusValueMapping["CheckIn"].text}</p>
                    </span>
                    <span className="divider"></span>
                    <span className="status" ref="InProgress" data-key="3">
                        <div className="statusNumber">{statusValueMapping["InProgress"].index}</div>
                        <p className="text">{statusValueMapping["InProgress"].text}</p>
                    </span>
                    <span className="divider"></span>
                    <span className="status" ref="Authorise" data-key="4">
                        <div className="statusNumber">{statusValueMapping["Authorise"].index}</div>
                        <p className="text">{statusValueMapping["Authorise"].text}</p>
                    </span>
                    <span className="divider"></span>
                    <span className="status" ref="Collect" data-key="5">
                        <div className="statusNumber">{statusValueMapping["Collect"].index}</div>
                        <p className="text">{statusValueMapping["Collect"].text}</p>
                    </span>
                </div>
                <div className="description">
                    <div className="status">
                        <div className="statusNumber">{statusValueMapping[this.props.job.statusValue].index}</div>
                        <p className="text">{statusValueMapping[this.props.job.statusValue].text}</p>
                    </div>
                    <h2 className="details">{statusValueMapping[this.props.job.statusValue].description}</h2>
                </div>
            </div>
        );
    }


    componentDidMount(){
        //console.log(this.props.status.statusValue);
        //console.log(this.refs[this.props.status.statusValue]);
        this.refs[this.props.job.statusValue].classList.add("active");
        let divs= document.querySelectorAll(".statusBar .bar .status");
        for(let i=0;i<divs.length;i++){
            if(divs[i].dataset.key<statusValueMapping[this.props.job.statusValue].index){
                divs[i].classList.add("finish");
            }
        }
    }

}

StatusBar.propTypes={
    job: PropTypes.object
}
//use this to get app state in class by props
function mapStateToProps(state){
    return {job:state.job};//just maintain only one level of state/ otherwise you can't get the child obj props
}

export default connect(mapStateToProps) (StatusBar);