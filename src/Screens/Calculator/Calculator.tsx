import React, { useReducer, useCallback, ChangeEvent } from 'react';
import { calculatorReducer, initialState, ACTIONS } from './Calculator.reducer';
import { Box } from '../../Components/Box';
import { Operator } from './Calculator.interfaces';
import { Grid, Cell } from './Components/Grid';
import { makeStyles } from '@material-ui/styles';

const operators = [
  {
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

const useStyles = makeStyles((theme: any) => ({
  wrapper: {
    padding: '40px',
  },
  inputField: {
    width: 60,
    height: 32,
    borderRadius: '2px',
    boxSizing: 'border-box',
    padding: 5,
    marginLeft:10,
    border: `1px solid ${theme.textColor}`,
  },
  button: {},
  list: {
    margin: 0,
    padding: 0,
    listStyle: 'none',
  },
}));

export const Calculator = () => {
  const classes = useStyles();
  const [state, dispatch] = useReducer(calculatorReducer, initialState);

  /**
   * onChange handles the update of the state and calls the reducer when a field changes
   */
  const onChange = useCallback(
    (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
      dispatch({
        type: ACTIONS.UPDATE_VALUE,
        payload: { index, value: Number(event.target.value) },
      });
    },
    [],
  );

  const addValue = useCallback(() => {
    dispatch({ type: ACTIONS.ADD_VALUE });
  }, []);

  const removeValue = useCallback(
    (index: number) => () => {
      dispatch({ type: ACTIONS.REMOVE_VALUE, payload: { index } });
    },
    [],
  );

  /**
   * setOperator handles switching between the different supported operators
   */
  const setOperator = useCallback(
    (operator: Operator) => (event: ChangeEvent<HTMLInputElement>) => {
      if (event.target.value) {
        dispatch({ type: ACTIONS.SET_OPERATOR, payload: { operator } });
      }
    },
    [],
  );

  return (
    <div className={classes.wrapper}>
      <Grid>
        {state.values.map((value, index) => (
          <Cell key={index}>
            <Box>
              Value {index + 1}:{' '}
              <input
                className={classes.inputField}
                onChange={onChange(index)}
                value={value}
                type="number"
              />
              <button className={classes.button} onClick={removeValue(index)}>
                Remove value
              </button>
            </Box>
          </Cell>
        ))}

        <Cell>
          <Box primary>
            <ul className={classes.list}>
              {operators.map(operation => (
                <li key={operation.result}>
                  <label htmlFor={operation.result}>
                    <input
                      type="radio"
                      name="operator"
                      id={operation.result}
                      checked={state.operator === operation.result}
                      onChange={setOperator(operation.result)}
                    />{' '}
                    {operation.label}
                  </label>
                </li>
              ))}
            </ul>

            <div>
              {state.operator}: {state.total}
              <button className={classes.button} onClick={addValue}>
                Add another value
              </button>
            </div>
          </Box>
        </Cell>
      </Grid>
    </div>
  );
};
