import { calculateTotal } from './Calculator.actions';
import { Operator } from './Calculator.interfaces';

describe('calculateTotal', () => {
  describe('calculates a value given a set of values', () => {
    it('should add values together', () => {
      const result = calculateTotal(Operator.sum, [1, 1]);
      expect(result).toEqual(2);
    });

    it('should subtract values', () => {
      const result = calculateTotal(Operator.difference, [5, 1]);
      expect(result).toEqual(4);
    });

    it('should multiply values', () => {
      const result = calculateTotal(Operator.product, [6, 2]);
      expect(result).toEqual(12);
    });

    it('should divide values', () => {
      const result = calculateTotal(Operator.dividend, [6, 2]);
      expect(result).toEqual(3);
    });
  });
});
