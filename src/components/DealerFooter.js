/**
 * Created by hea on 1/26/18.
 */
import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class DealerFooter extends Component{

    render(){
        return (<h1 className="dealerFooter">Any questions? Call us on <span>01234567890</span></h1>);
    }
}

//https://reactjs.org/docs/typechecking-with-proptypes.html
//validation props

DealerFooter.propTypes={
    dealer: PropTypes.object
}

//use this to get app state in class by props
function mapStateToProps(state){
    return {dealer:state.dealer};
}

export default connect(mapStateToProps) (DealerFooter);