
/**
 * Created by hea on 1/25/18.
 */

import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class CustomerSection extends Component{

    constructor(props){
        super(props);
        this.handleCheckboxComplete= this.handleCheckboxComplete.bind(this);
        this.handleInputValidation =this.handleInputValidation.bind(this);
    }


    handleCheckboxComplete(event){
        if(event.target.checked){
            console.log(event.target);
            if(event.target.id==="cEmail"){
                document.querySelector("#phone p").innerHTML="Email";
                document.querySelector("#phone input").value=this.props.job.OnCompleteNotificationEmail?this.props.job.OnCompleteNotificationEmail:this.props.customer.email;
            }else if(event.target.id==="cCall"||event.target.id==="cSMS"){
                document.querySelector("#phone p").innerHTML="Phone";
                document.querySelector("#phone input").value=this.props.job.OnCompleteNotificationValue;
            }else if(event.target.id==="efalse"){
                document.querySelector("#iMethod").style.opacity="0";
                document.querySelector("#phoneUpdate").style.opacity="0";
            }else if(event.target.id==="etrue"){
                document.querySelector("#iMethod").style.opacity="1";
                document.querySelector("#phoneUpdate").style.opacity="1";
            }
        }
    }

    displayRegistration(r){
        if(r&&r.length>4){
            r= r.slice(0,4)+" "+r.slice(4);
        }
        return r;
    }

    displayTasks(tasks){
        if(tasks){
            let lists = JSON.parse(tasks);
            return lists.map(function (list, i) {//https://stackoverflow.com/questions/28329382/understanding-unique-keys-for-array-children-in-react-js
                return <li key={i}><h4 className="taskName">{list.name}</h4><p>{list.description}</p></li>;
                }
            );
        }
    }

    displayDealerBranch(b){
        if(b){
            let branch = JSON.parse(b)[0];
            return (<div className="branch"><h4 className="branchName">{branch.name}</h4><p>{branch.address.line1}</p><p>{branch.address.line2}</p><p>{branch.address.postCode}</p><a className="direction">Need direction?</a></div>);
        }
    }

    handleInputValidation(event){
        let isValid = true;
       if(event.target.id==="cphone"){
           let emailCheckbox =document.querySelector("#cEmail");
           if(emailCheckbox&&emailCheckbox.checked){
               let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
               isValid = reg.test(event.target.value);
               console.log("check email:"+ isValid);
               if(!isValid){
                   document.querySelector("#phone").classList.add("error");
               }else{
                   document.querySelector("#phone").classList.remove("error");
               }
           }else{
               let reg=/^\d+$/;
               isValid=reg.test(event.target.value);
               console.log("check phone"+isValid);
               if(!isValid){
                   document.querySelector("#phone").classList.add("error");
               }else{
                   document.querySelector("#phone").classList.remove("error");
               }
           }
       }else{
           let reg=/^\d+$/;
           isValid=reg.test(event.target.value);
           console.log("check phone"+isValid);
           if(!isValid){
               document.querySelector("#phoneUpdate").classList.add("error");
           }else{
               document.querySelector("#phoneUpdate").classList.remove("error");
           }
       }

    }

// defaultChecked not update when app state changes
    componentDidMount(){
        if(this.props.job.OnCompleteNotificationMethod){
            document.querySelector("#c"+this.props.job.OnCompleteNotificationMethod).checked=true;
            if(this.props.job.OnCompleteNotificationMethod==="Email"){
                document.querySelector("#phone p").innerHTML="Email";
                document.querySelector("#phone input").value=this.props.job.OnCompleteNotificationEmail;
            }else{
                document.querySelector("#phone p").innerHTML="Phone";
                document.querySelector("#phone input").value=this.props.job.OnCompleteNotificationValue;
            }
        }

        if(this.props.job.InProgressNotificationActive){
            document.querySelector("#e"+this.props.job.InProgressNotificationActive).checked=true;
            if(this.props.job.InProgressNotificationActive===true){
                document.querySelector("#phoneUpdate input").value=this.props.job.InProgressNotificationValue;
            }
        }

    }
// defaultChecked not update when app state changes
    componentWillUpdate(){
        if(this.props.job.OnCompleteNotificationMethod){
            document.querySelector("#c"+this.props.job.OnCompleteNotificationMethod).checked=true;
            if(this.props.job.OnCompleteNotificationMethod==="Email"){
                document.querySelector("#phone p").innerHTML="Email";
                document.querySelector("#phone input").value=this.props.job.OnCompleteNotificationEmail;
            }else{
                document.querySelector("#phone p").innerHTML="Phone";
                document.querySelector("#phone input").value=this.props.job.OnCompleteNotificationValue;
            }
        }

        if(this.props.job.InProgressNotificationActive!==undefined){
            document.querySelector("#e"+this.props.job.InProgressNotificationActive).checked=true;
            if(this.props.job.InProgressNotificationActive===true){
                document.querySelector("#i"+this.props.job.InProgressNotificationMethod).checked=true;
                document.querySelector("#phoneUpdate input").value=this.props.job.InProgressNotificationValue;
            }else{
                document.querySelector("#iMethod").style.display="none";
                document.querySelector("#phoneUpdate").style.display="none";
            }

        }
    }
//:check ~ selector only works on it's following siblings

    render(){
        return(
        <div className="customerSection">

            <input id="toggle1" type="checkbox"/>
            <label htmlFor="toggle1" id="label1"></label>

            <input id="toggle2" type="checkbox"/>
            <label htmlFor="toggle2" id="label2"></label>
            <div className="customerDetails" id="customerDetails">
                <h2>Your details</h2>
                <div className="model">
                    <p className="local">GB</p>
                    <p className="registration">{this.displayRegistration(this.props.vehicle.registration)}</p>
                </div>
                <h2 className="modelName">{this.props.vehicle.manufacturer+" "+ this.props.vehicle.model}</h2>
                <div className="detailsBooking">
                    <div className="when">
                        <h4>When</h4>
                        <div className="dateAndTime">
                            <h4 className="date">{this.props.booking.date}</h4>
                            <p className="time">{"In  "+this.props.booking.timeIn}</p>
                            <p className="time">{"Out  "+this.props.booking.timeOut}</p>
                        </div>
                    </div>
                    <div className="what">
                        <h4>What</h4>
                        <ul>{this.displayTasks(this.props.booking.tasks)}</ul>
                    </div>
                    <div className="transport">
                        <h4>Transport</h4>
                        <div className="transportDetails">
                            <h4 className="transportName">Courtesy Car</h4>
                            <p>We'll offer you a car to drive until yours is ready</p>
                        </div>
                    </div>
                    <div className="where">
                        <h4>Where</h4>
                        {this.displayDealerBranch(this.props.dealer.branches)}
                    </div>
                    <div className="price">
                        <h4>Total</h4>
                        <div className="priceDetails">
                            <h4 className="eprice">&pound;&nbsp;{this.props.booking.price}*</h4>
                            <p>*estimated price</p>
                        </div>
                    </div>
                </div>
                <button className="seeMore">See more</button>
            </div>
            <div className="notification" id="notification">
                <h2>Notification preferences</h2>
                <h4>How would you like us to notify you when your work is complete?</h4>
                <div className="options">
                    <div className="option">
                        <p>SMS</p>
                        <span className="radioIcon"><p ><input type="radio"  id="cSMS" name="ngroup" onChange={this.handleCheckboxComplete} /><label  htmlFor="cSMS"></label></p></span>
                    </div>
                    <div className="option">
                        <p>Call</p>
                        <span className="radioIcon"><p ><input type="radio"  id="cCall" name="ngroup" onChange={this.handleCheckboxComplete} /><label  htmlFor="cCall"></label></p></span>
                    </div>
                    <div className="option">
                        <p>Email</p>
                        <span className="radioIcon"><p><input type="radio"  id="cEmail" name="ngroup" onChange={this.handleCheckboxComplete} /><label  htmlFor="cEmail"></label></p></span>
                    </div>
                    <div id="phone">
                        <p>Phone</p><span>Invalid Value</span>
                        <input className="phoneNumber" id="cphone" type="text" onBlur={this.handleInputValidation}/>
                    </div>
                </div>
                <h4>Would you like us to keep you updated as your car progress through the workshop?</h4>
                <div className="updateOptions">
                    <div className="options">
                        <div className="option">
                            <p>Yes</p>
                            <span className="radioIcon"><p ><input type="radio"  id="etrue" name="egroup" onChange={this.handleCheckboxComplete} /><label  htmlFor="etrue"></label></p></span>
                        </div>
                        <div className="option">
                            <p>No</p>
                            <span className="radioIcon"><p ><input type="radio"  id="efalse" name="egroup" onChange={this.handleCheckboxComplete} /><label  htmlFor="efalse"></label></p></span>
                        </div>
                    </div>
                    <div className="options" id="iMethod">
                        <div className="option">
                            <p>SMS</p>
                            <span className="radioIcon"><p ><input type="radio"  id="iSMS" name="ugroup" onChange={this.handleCheckboxComplete} /><label  htmlFor="iSMS"></label></p></span>
                        </div>
                        <div className="option">
                            <p>Call</p>
                            <span className="radioIcon"><p ><input type="radio"  id="iCall" name="ugroup" onChange={this.handleCheckboxComplete} /><label  htmlFor="iCall"></label></p></span>
                        </div>
                    </div>
                </div>
                <div id="phoneUpdate">
                    <p>Phone</p><span>Invalid Value</span>
                    <input id="uphone" className="phoneNumber" type="text" onBlur={this.handleInputValidation}/>
                </div>
            </div>
        </div>


        );
    }
}

//https://reactjs.org/docs/typechecking-with-proptypes.html
//validation props

CustomerSection.propTypes={
    customer: PropTypes.object,
    vehicle: PropTypes.object,
    booking: PropTypes.object,
    dealer: PropTypes.object,
    job: PropTypes.object
}

//use this to get app state in class by props
function mapStateToProps(state){
    return {customer:state.customer, vehicle: state.vehicle, booking: state.booking ,dealer: state.dealer, job: state.job};
}

export default connect(mapStateToProps) (CustomerSection);