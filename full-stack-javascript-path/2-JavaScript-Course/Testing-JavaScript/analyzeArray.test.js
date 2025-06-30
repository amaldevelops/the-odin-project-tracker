import { analyzeArray } from "./analyzeArray";
const newIstanceAnalyzeArray = new analyzeArray([1, 8, 3, 4, 2, 6]);
const returnedObject = { average: 4, min: 1, max: 8, length: 6 };

test("An analyzeArray function that takes an array of numbers and returns an object with the following properties: average, min, max, and length.", () => {
  expect(newIstanceAnalyzeArray.returnObject()).toStrictEqual(returnedObject);
});

test("Check for average", () => {
  expect(newIstanceAnalyzeArray.average()).toBe(4);
});

test("Check for Minimum", () => {
  expect(newIstanceAnalyzeArray.min()).toBe(1);
});

test("Check for Maximum", () => {
  expect(newIstanceAnalyzeArray.max()).toBe(8);
});

test("Check for Length", () => {
  expect(newIstanceAnalyzeArray.length()).toBe(6);
});
