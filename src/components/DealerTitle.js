/**
 * Created by hea on 1/25/18.
 */

import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


class DealerTitle extends Component{

    render(){
        return(
            <h1 className="dealerTitle">{this.props.dealer.name+ " Workshop Tracker"}</h1>
        );
    }
}

DealerTitle.propTypes={
    dealer: PropTypes.object
}
//use this to get app state in class by props
function mapStateToProps(state){
    return {dealer:state.dealer};
}

export default connect(mapStateToProps) (DealerTitle);