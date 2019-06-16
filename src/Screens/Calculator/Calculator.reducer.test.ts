import { useReducer } from 'react';
import { act, renderHook } from 'react-hooks-testing-library';
import { calculatorReducer, ACTIONS } from './Calculator.reducer';
import { Operator } from './Calculator.interfaces';

const mockInitialState = {
  operator: Operator.product,
  values: [0, 0, 0],
  total: 0,
};

describe('calculatorReducer', () => {
  it('adds a value', () => {
    expect.assertions(2);
    const { result } = renderHook(() =>
      useReducer(calculatorReducer, mockInitialState),
    );

    expect(result.current[0].values.length).toEqual(3);
    act(() => {
      result.current[1]({ type: ACTIONS.ADD_VALUE });
    });
    expect(result.current[0].values.length).toEqual(4);
  });

  it('removes a value', () => {
    expect.assertions(2);
    const { result } = renderHook(() =>
      useReducer(calculatorReducer, mockInitialState),
    );

    expect(result.current[0].values.length).toEqual(4);
    act(() => {
      result.current[1]({ type: ACTIONS.REMOVE_VALUE, payload: { index: 1 } });
    });
    expect(result.current[0].values.length).toEqual(3);
  });

  it('updates values', () => {
    expect.assertions(2);
    const { result } = renderHook(() =>
      useReducer(calculatorReducer, mockInitialState),
    );

    expect(result.current[0].values).toEqual([0, 0, 0]);
    act(() => {
      result.current[1]({
        type: ACTIONS.UPDATE_VALUE,
        payload: { index: 0, value: 1 },
      });
      result.current[1]({
        type: ACTIONS.UPDATE_VALUE,
        payload: { index: 1, value: 2 },
      });
      result.current[1]({
        type: ACTIONS.UPDATE_VALUE,
        payload: { index: 2, value: 3 },
      });
    });
    expect(result.current[0].values).toEqual([1, 2, 3]);
  });

  it('changes the operator', () => {
    expect.assertions(2);
    const { result } = renderHook(() =>
      useReducer(calculatorReducer, mockInitialState),
    );

    expect(result.current[0].operator).toEqual(Operator.product);
    act(() => {
      result.current[1]({
        type: ACTIONS.SET_OPERATOR,
        payload: { operator: Operator.sum },
      });
    });
    expect(result.current[0].operator).toEqual(Operator.sum);
  });

  it("should add the values together when it's set to addition", () => {
    expect.assertions(3);
    const { result } = renderHook(() =>
      useReducer(calculatorReducer, mockInitialState),
    );

    expect(result.current[0].operator).toEqual(Operator.product);
    act(() => {
      result.current[1]({
        type: ACTIONS.SET_OPERATOR,
        payload: { operator: Operator.sum },
      });
      result.current[1]({
        type: ACTIONS.UPDATE_VALUE,
        payload: { index: 0, value: 2 },
      });
      result.current[1]({
        type: ACTIONS.UPDATE_VALUE,
        payload: { index: 1, value: 3 },
      });
      result.current[1]({
        type: ACTIONS.UPDATE_VALUE,
        payload: { index: 2, value: 3 },
      });
    });
    expect(result.current[0].operator).toEqual(Operator.sum);
    expect(result.current[0].total).toBe(8);
  });

  it('throws error if incorrect type is given', () => {
    expect.assertions(1);

    const { result } = renderHook(() =>
      useReducer(calculatorReducer, mockInitialState),
    );
    const [, dispatch] = result.current;

    act(() => {
      // @ts-ignore
      dispatch({ type: 'FOO' });
    });

    expect(result.error).toEqual(
      Error('Calculator reducer dispatched without a valid action.'),
    );
  });
});
