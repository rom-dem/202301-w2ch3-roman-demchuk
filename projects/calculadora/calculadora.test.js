import { operations } from "./calculadora";

operations;

describe("Given a function suma", () => {
  describe("When it receives 2 and 2", () => {
    test("Then it should return 8", () => {
      const firstNumber = 2;
      const secondNumber = 2;
      const expectedResult = 4;

      const result = operations(firstNumber, secondNumber);

      expect(result).toBe(expectedResult);
    });
  });
});
