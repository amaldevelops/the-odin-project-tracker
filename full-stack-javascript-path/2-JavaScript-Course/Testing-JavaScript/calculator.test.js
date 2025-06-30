import { calculator } from "./calculator";

test("A calculator object that contains functions for the basic operations: add, subtract, divide, and multiply. Each of these functions should take two numbers and return the correct calculation.", () => {
  expect(calculator(1, "+", 2)).toBe(3);
  expect(calculator(3, "-", 2)).toBe(1);
  expect(calculator(4, "/", 2)).toBe(2);
  expect(calculator(4, "*", 2)).toBe(8);
});
