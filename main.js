function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function reverseString(string) {
  let temp = [];
  string.split("").forEach((char) => {
    temp.push(char);
  });

  let new_string = "";
  temp.reverse().forEach((character) => {
    new_string = new_string + character;
  });
  return new_string;
}

const calculator = {
  add(a, b) {
    let res = +a + +b;
    return this.formatResult(res);
  },

  sub(a, b) {
    let res = +a - +b;
    return this.formatResult(res);
  },

  mul(a, b) {
    let res = +a * +b;
    return this.formatResult(res);
  },

  div(a, b) {
    let res = +a / +b;
    return this.formatResult(res);
  },

  formatResult(result) {
    if (result % 1 !== 0) {
      result = result.toFixed(4).replace(/\.?0+$/, "");
    }
    return result;
  },
};

module.exports = {
  capitalize: capitalize,
  reverseString: reverseString,
  calculator: calculator,
};
