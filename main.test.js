const { capitalize, reverseString } = require("./main");

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
});
