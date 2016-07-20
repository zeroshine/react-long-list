import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { checkedItem } from '../AppRedux/reducer';

class CheckBox extends Component {
  onChangeHandler = () => {
    this.props.checkedItem(this.props.index);
  }

  render() {
    return (
      <div>
        <input
          type="checkbox"
          checked={this.props.checked}
          onChange={this.onChangeHandler}
        />
        {this.props.value}
      </div>
    );
  }
}

CheckBox.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
  checked: PropTypes.bool,
  value: PropTypes.string,
  checkedItem: PropTypes.func,
  index: PropTypes.num,
};

function makeMapStateToProps(initialState, initialProps) {
  const index = initialProps.index;
  const value = initialState.checked[index].value;
  return function (state, props) {
    return {
      value,
      checked: state.checked[index].checked,
    };
  };
}

export default connect(makeMapStateToProps, { checkedItem })(CheckBox);
