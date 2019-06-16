import { Reducer } from 'react';
import { calculateTotal } from './Calculator.actions';
import { State, Action, Operator } from './Calculator.interfaces';

export enum ACTIONS {
  UPDATE_VALUE = 'UPDATE_VALUE',
  ADD_VALUE = 'ADD_VALUE',
  REMOVE_VALUE = 'REMOVE_VALUE',
  SET_OPERATOR = 'SET_OPERATOR',
}

export const initialState: State = {
  operator: Operator.product,
  values: [0, 0, 0],
  total: 0,
};
// @ts-ignore
export const calculatorReducer: Reducer<State, Action> = (
  state = initialState,
  { type, payload = {} },
) => {
  const { index, value, operator } = payload;
  const { values } = state;
  switch (type) {
    case ACTIONS.ADD_VALUE:
      const nextIndex = values.length;
      values[nextIndex] = 0;
      return {
        ...state,
        values,
        total: calculateTotal(state.operator, values),
      };

    case ACTIONS.UPDATE_VALUE:
      values[index] = value;
      return {
        ...state,
        values,
        total: calculateTotal(state.operator, values),
      };

    case ACTIONS.REMOVE_VALUE:
      values.splice(index, 1);
      return {
        ...state,
        values,
        total: calculateTotal(state.operator, values),
      };

    case ACTIONS.SET_OPERATOR:
      return {
        ...state,
        values,
        operator,
        total: calculateTotal(operator, values),
      };

    default:
      throw new Error('Calculator reducer dispatched without a valid action.');
  }
};
