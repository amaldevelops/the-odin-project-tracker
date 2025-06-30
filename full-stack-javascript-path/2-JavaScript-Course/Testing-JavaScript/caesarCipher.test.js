import { caesarCipher } from "./caesarCipher";

test("A caesarCipher function that takes a string and a shift factor and returns it with each character “shifted”.", () => {
  expect(caesarCipher("Amal+Kar2024*xyz", 3)).toBe("Dpdo+Ndu2024*abc");
});
