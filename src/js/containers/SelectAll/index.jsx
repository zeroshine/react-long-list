import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { selectAll, clearAll } from '../AppRedux/reducer';

class SelectAll extends Component {
  state = {
    checked: false,
  };

  onChangeHandler = () => {
    if (this.state.checked) {
      this.props.clearAll();
    } else {
      this.props.selectAll();
    }
    this.setState({ checked: !this.state.checked });
  }

  render() {
    return (
      <div>
        <input
          type="checkbox"
          checked={this.state.checked}
          onChange={this.onChangeHandler}
        />
        selectAll
      </div>
    );
  }
}

SelectAll.propTypes = {
  clearAll: PropTypes.func,
  selectAll: PropTypes.func,
};

export default connect(() => ({}), { selectAll, clearAll })(SelectAll);
