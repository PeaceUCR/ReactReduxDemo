/**
 * Created by hea on 1/29/18.
 */
import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class VehicleHealthCheck extends Component{
    constructor(props){
        super(props);
        this.handleClick= this.handleClick.bind(this);
        this.handleItemClick= this.handleItemClick.bind(this);
    }

    checkAuth(items){
        if(items){
            let lists = JSON.parse(items);
            for(let i=0; i<lists.length;i++){
                if(lists[i].status.value!=="Green"){
                    return true;
                }
            }
        }

        return false;
    }

    handleClick(){
        this.refs.msg.classList.add("hidden");
        this.refs.items.classList.remove("hidden");
    }

    handleItemClick(refItem){
        if(this.refs[refItem]){
            this.refs[refItem].classList.toggle("checked");
        }

    }

    displayItems(items){
        if(items){
            let lists = JSON.parse(items);
            return lists.map(function (list, i){
                return (<div key={i}>
                            <button className="shop" ref={i+"shop"}  onClick={()=>this.handleItemClick(i+"shop")}></button>
                            <li  ref={i+"item"} className={list.status.value} onClick={()=>this.handleItemClick(i+"item")}>
                             <div className={ "list"}>
                                 <span className="iprice">&pound;{list.price}</span>
                                <p className="name">{list.name}</p>
                                <p className="description">{list.description}</p>

                                <div className="details">
                                    <span>{"Authorised:"+list.authorised}</span>
                                    <span>{"RequireAuthorisation:"+list.status.requireAuthorisation}</span>
                                </div>
                             </div>
                            </li>
                    </div>);
            }.bind(this));
        }
    }

    displayAuthMsg(items){
        if(this.checkAuth(items)){
            return (<div className="msg" ref="msg">
                        <h4>The additional work required is urgent, and requires completion before it is safe to drive.</h4>
                        <h4>View your Vehicle Health Check Summary to review what work is required and authorise.</h4>
                        <a id="view" href={this.props.vhc.url}>View</a>
                    </div>);
        }

        return (<div className="msg" ref="msg">
                    <h4>We have completed a Vehicle Health Check. There is no additional work to authorise.</h4>
                    <h4>View your Vehicle Health Check Summary.</h4>
                    <a id="view" href={this.props.url}>View</a>
                </div>);
    }

    render(){
        return (<div className="vhc">
                    <h1>Vehicle Health Check</h1>
                    {this.displayAuthMsg(this.props.vhc.items)}
                    <ul className="items hidden" ref="items">
                        {this.displayItems(this.props.vhc.items)}
                    </ul>
                </div> );
    }
}

//https://reactjs.org/docs/typechecking-with-proptypes.html
//validation props

VehicleHealthCheck.propTypes={
    vhc: PropTypes.object
}

//use this to get app state in class by props
function mapStateToProps(state){
    return {vhc:state.vhc};
}

export default connect(mapStateToProps) (VehicleHealthCheck);