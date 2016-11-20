import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import * as Actions from './SampleActions';

export function SampleComponent({sample, dispatch}){
  return (
    <div>
      <Button onClick={(e) => {dispatch(Actions.incCount())}}>Press</Button>
      <h4>{sample.count}</h4>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return Object.assign({}, state); // Assigning state to this.props
}


export default connect(
  mapStateToProps,
)(SampleComponent);
