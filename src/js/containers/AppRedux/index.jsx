import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import CheckBox from '../CheckBox';
import SelectAll from '../SelectAll';

const App = ({ num }) => (
  <div>
    <SelectAll />
    {Array.from({ length: num }, (v, k) => <CheckBox key={k} index={k} />)}
  </div>
);

App.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
  num: PropTypes.number,
};

function mapStateToProps(state) {
  return {
    num: state.checked.length,
  };
}

export default connect(mapStateToProps)(App);
