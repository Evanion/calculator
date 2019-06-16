import React, { useReducer, useCallback, ChangeEvent } from 'react';
import { calculatorReducer, initialState, ACTIONS } from './Calculator.reducer';
import { Box } from '../../Components/Box';
import { Operator } from './Calculator.interfaces';

const operators = [{
  label: 'multiply',
  result: Operator.product,
},
{
  label: 'divide',
  result: Operator.dividend,
},
{
  label: 'addition',
  result: Operator.sum,
},
{
  label: 'subraction',
  result: Operator.difference,
},
];
export const Calculator = () => {
  const [state, dispatch] = useReducer(calculatorReducer, initialState);

  /**
   * onChange handles the update of the state and calls the reducer when a field changes
   */
  const onChange = useCallback((index: number) => (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({type: ACTIONS.UPDATE_VALUE, payload: {index, value: Number(event.target.value)}});
  }, []);

  const addValue = useCallback(() => {
    dispatch({type: ACTIONS.ADD_VALUE});
  }, []);

  const removeValue = useCallback((index: number) => () => {
    dispatch({type: ACTIONS.REMOVE_VALUE, payload: {index}});
  }, []);

  /**
   * setOperator handles switching between the different supported operators
   */
  const setOperator = useCallback((operator: Operator) => (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value) {
      dispatch({type: ACTIONS.SET_OPERATOR, payload: {operator}});
    }
  }, []);

  return (
    <div>
      {state.values.map((value, index) => (<Box key={index}>
      value {index + 1}: <input onChange={onChange(index)} value={value} type="number" />
      <button onClick={removeValue(index)}>Remove value</button>
    </Box>))}

    <button onClick={addValue}>Add another value</button>

    <Box primary>
      <ul>
        {operators.map(operation => (<li key={operation.result}><label htmlFor={operation.result}><input type="radio" name="operator" id={operation.result} checked={state.operator === operation.result} onChange={setOperator(operation.result)} /> {operation.label}</label></li>))}
      </ul>

      <div>
      {state.operator}: {state.total}
      </div>

      </Box>
      {JSON.stringify(state)}
    </div>

  );
};
