const { beforeEach } = require("node:test");
const {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} = require("./main");

describe("My tests", () => {
  describe("Capitalize works correctly", () => {
    test("capitalize works correctly for multiple words", () => {
      let cap1 = capitalize("hello world");
      expect(cap1).toBe("Hello world");
    });

    test("capitalize keeps case", () => {
      let cap2 = capitalize("HeLlO wORlD");
      expect(cap2).toBe("HeLlO wORlD");
    });
  });

  describe("ReverseString works correctly", () => {
    test("works for 2 words", () => {
      let str1 = reverseString("race car");

      expect(str1).toBe("rac ecar");
    });
    test("works for single word", () => {
      let str2 = reverseString("hello");

      expect(str2).toBe("olleh");
    });

    test("works for punctuation", () => {
      let str3 = reverseString("This is a Test?");
      expect(str3).toBe("?tseT a si sihT");
    });
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

  describe("Caesar cipher works", () => {
    test("wrapping from a to z", () => {
      expect(caesarCipher("abcdefghijklmnopqrstuvwxyz")).toBe(
        "defghijklmnopqrstuvwxyzabc"
      );
    });

    test("keeping the same case", () => {
      expect(caesarCipher("Hello World")).toBe("Khoor Zruog");
    });

    test("punctuation is not affected", () => {
      expect(caesarCipher("Hello! It's me, here?.")).toBe(
        "Khoor! Lw'v ph, khuh?."
      );
    });
  });

  describe("Analyze array works", () => {
    test("average is correctly calculated", () => {
      expect(analyzeArray([1, 8, 3, 4, 2, 6]).average).toBe(4);
    });

    test("min is correctly calculated", () => {
      expect(analyzeArray([1, 8, 3, 4, 2, 6]).min).toBe(1);
    });

    test("max is correctly calculated", () => {
      expect(analyzeArray([1, 8, 3, 4, 2, 6]).max).toBe(8);
    });

    test("length is correctly calculated", () => {
      expect(analyzeArray([1, 8, 3, 4, 2, 6]).length).toBe(6);
    });
  });
});
