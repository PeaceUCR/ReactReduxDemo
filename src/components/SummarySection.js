/**
 * Created by hea on 1/29/18.
 */

import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class SummarySection extends Component{

    calculateTotal(tasks, items){
        let total=0;
        if(tasks){
            let lists = JSON.parse(tasks);
            for(let i=0;i<lists.length;i++){
                total += lists[i].price;
            }
        }

        if(items){
            let lists = JSON.parse(items);
            for(let i=0;i<lists.length;i++){
                total += lists[i].price;
            }
        }

        return total;

    }

    displayTasks(tasks){
        if(tasks){
            let lists = JSON.parse(tasks);
            return lists.map(function (list, i) {//https://stackoverflow.com/questions/28329382/understanding-unique-keys-for-array-children-in-react-js
                return <li key={i}><p>{list.name}</p><p>&pound;{list.price}</p></li>;
                }
            );
        }
    }

    displayItems(items){
        if(items){
            let lists = JSON.parse(items);
            return lists.map(function (list, i){
                return (
                    <li   key={i}>
                            <p className="name">{list.name}</p>
                            <p className="iprice">&pound;{list.price}</p>
                    </li>);
            });
        }
    }
    render(){
        return (<div className="summary">
                    <h1>Your Summary</h1>
                    <div>
                        <ul>
                            <li><p>Item</p><p>Price</p></li>
                            {this.displayTasks(this.props.booking.tasks)}
                            {this.displayItems(this.props.vhc.items)}</ul>
                    </div>
                    <p className="total">TOTAL:&nbsp;&nbsp;&nbsp;&nbsp;&pound;{this.calculateTotal(this.props.booking.tasks,this.props.vhc.items)}</p>
                    <button className="home">Servicing home</button>
        </div>);
    }
}

//https://reactjs.org/docs/typechecking-with-proptypes.html
//validation props

SummarySection.propTypes={
    booking: PropTypes.object,
    vhc: PropTypes.object
}

//use this to get app state in class by props
function mapStateToProps(state){
    return {vhc:state.vhc, booking: state.booking};
}

export default connect(mapStateToProps)(SummarySection);