import map from 'lodash/map';
const initialState = Array.from({ length: 10000 }, (v, k) => ({ checked: false, value: `test${k}` }));
const SELECT_ALL = 'SELECT_ALL';
const CLEAR_ALL = 'CLEAR_ALL';
const CHECKED_ITEM = 'CHECKED_ITEM';

export default function checked(state = initialState, action) {
  switch (action.type) {
    case SELECT_ALL:
      return map(state, (v, k) => ({ checked: true, value: `test${k}` }));
    case CLEAR_ALL:
      return map(state, (v, k) => ({ checked: false, value: `test${k}` }));
    case CHECKED_ITEM:
      return map(state, (item, i) => {
        if (i === action.index) return { checked: !item.checked, value: item.value };
        return item;
      })
    default:
      return state;
  }
}

export function selectAll() {
  return { type: SELECT_ALL };
}

export function clearAll() {
  return { type: CLEAR_ALL };
}

export function checkedItem(index) {
  return { type: CHECKED_ITEM, index };
}
