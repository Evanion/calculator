import { Operator } from './Calculator.interfaces';

export const calculateTotal = (operator: Operator, values: number[]) => {
  switch (operator) {
    case Operator.product:
      return values.reduce((acc, next) => {
        return acc * next;
      }, 1);
    case Operator.dividend:
      return values.reduce((acc, next) => {
        if (!acc) {
          return next;
        }
        return acc / next;
      });
    case Operator.sum:
      return values.reduce((acc, next) => {
        return acc + next;
      }, 0);
    case Operator.difference:
      return values.reduce((acc, next) => {
        if (!acc) {
          return next;
        }
        return acc - next;
      });
    default:
      throw new Error('"operator" needs to be of a known type');
  }
};
