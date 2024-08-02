// test/math.test.ts
import { add, subtract } from '../src/math';

describe('Math functions', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
  });

  test('subtracts 5 - 3 to equal 2', () => {
    expect(subtract(5, 3)).toBe(2);
  });

  test('adds negative numbers', () => {
    expect(add(-1, -2)).toBe(-3);
  });

  test('subtracts with negative result', () => {
    expect(subtract(2, 5)).toBe(-3);
  });
});
