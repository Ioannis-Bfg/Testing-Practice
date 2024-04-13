const { beforeEach } = require("node:test");
const { capitalize, reverseString, calculator } = require("./main");

describe("My tests", () => {
  test("capitalize works correctly", () => {
    let cap1 = capitalize("hello world");
    let cap2 = capitalize("HeLlO wORlD");
    expect(cap1).toBe("Hello world");
    expect(cap2).toBe("HeLlO wORlD");
  });

  test("reverseString works correctly", () => {
    let str1 = reverseString("race car");
    let str2 = reverseString("hello");
    let str3 = reverseString("This is a Test?");

    expect(str1).toBe("rac ecar");
    expect(str2).toBe("olleh");
    expect(str3).toBe("?tseT a si sihT");
  });

  describe("Calculator works correctly", () => {
    test("Addition works", () => {
      expect(calculator.add(2, 1)).toBe(3);
      expect(calculator.add(2, -3)).toBe(-1);
      expect(calculator.add(-4, -8)).toBe(-12);
    });

    test("Subtraction works", () => {
      expect(calculator.sub(2, 1)).toBe(1);
      expect(calculator.sub(2, -3)).toBe(5);
      expect(calculator.sub(-4, -8)).toBe(4);
    });

    test("Multiplication works", () => {
      expect(calculator.mul(2, 1)).toBe(2);
      expect(calculator.mul(2, -3)).toBe(-6);
      expect(calculator.mul(-4, -8)).toBe(32);
    });

    test("Division works", () => {
      expect(calculator.div(2, 1)).toBe(2);
      expect(calculator.div(6, -3)).toBe(-2);
      expect(calculator.div(-4, -8)).toBe("0.5");
    });
  });
});
