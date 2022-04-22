import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
// import {bindActionCreators} from 'redux';
import { Button, Badge } from 'reactstrap';

const Counter = ({counter, inc, dec, rnd}) => {
    return(
        <div className="jumbotron">
            <Badge color="danger"><h1>{counter}</h1></Badge>
            <br></br>
            <br></br>
            <Button onClick={dec} color="primary" className="col-3">DEC</Button>
            <Button onClick={inc} color="success" className="col-3">INC</Button>
            <Button onClick={rnd} color="warning" className="col-3">RND</Button>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        counter: state
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators (actions, dispatch);
// }

export default connect(mapStateToProps, actions)(Counter);
