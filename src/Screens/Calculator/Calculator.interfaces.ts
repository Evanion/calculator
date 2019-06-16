import { ACTIONS } from './Calculator.reducer';

export enum Operator {
  product = 'product',
  dividend = 'dividend',
  sum = 'sum',
  difference = 'difference',
}

export interface State {
  operator: Operator;
  values: number[];
  total: number;
}

export interface AddValueAction {
  type: ACTIONS.ADD_VALUE;
  payload?:any;
}

export interface UpdateValueAction {
  type: ACTIONS.UPDATE_VALUE;
  payload: {
    index: number;
    value: number;
  };
}

export interface RemoveValueAction {
  type: ACTIONS.REMOVE_VALUE;
  payload: {
    index: number;
  };
}

export interface SetOperator {
  type: ACTIONS.SET_OPERATOR;
  payload: {
    operator: Operator;
  };
}

export type Action =
  | AddValueAction
  | UpdateValueAction
  | RemoveValueAction
  | SetOperator;
