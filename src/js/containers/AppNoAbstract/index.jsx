import React, { PropTypes, Component } from 'react';
import pure from 'recompose/pure';
import map from 'lodash/map';

class App extends Component {
  state = {
    checked: Array.from({ length: 10000 }, (v, k) => ({ checked: false, value: `test${k}` })),
    selectAll: false,
  };

  onChangeHandler = () => {
    this.setState({
      checked: map(this.state.checked, (item, i) =>
        ({ checked: !this.state.selectAll, value: `test${i}` }
      )),
      selectAll: !this.state.selectAll,
    });
  };

  itemOnChangeHandler = (index) => {
    return () => {
      this.setState({
        checked: map(this.state.checked, (item, i) => {
          if (i === index) return { checked: !item.checked, value: item.value };
          return item;
        }),
      });
    };
  }

  render() {
    return (
      <div>
        <div>
          <input type="checkbox" checked={this.state.selectAll} onChange={this.onChangeHandler} />
          selectAll
        </div>
        {map(this.state.checked, (item, i) => (
          <div>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={this.itemOnChangeHandler(i)}
            />
            {item.value}
          </div>
        ))}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
};

export default pure(App);
