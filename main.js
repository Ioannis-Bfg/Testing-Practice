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

function caesarCipher(string) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let factor = 3;
  let array_from_input = string.split("");

  for (let i = 0; i < array_from_input.length; i++) {
    if (/[a-zA-Z]/.test(array_from_input[i])) {
      let isUpperCase =
        array_from_input[i] === array_from_input[i].toUpperCase();
      let origin_char_index = alphabet.indexOf(
        array_from_input[i].toLowerCase()
      );
      let new_index = (origin_char_index + factor) % alphabet.length;
      let cipheredChar = alphabet[new_index];
      if (isUpperCase) {
        cipheredChar = cipheredChar.toUpperCase();
      }
      array_from_input[i] = cipheredChar;
    }
  }

  let cipher = array_from_input.join("");

  return cipher;
}

function analyzeArray(array) {
  let sorted_array = array.sort((a, b) => a - b);
  let sum = 0;

  for (let i = 0; i < sorted_array.length; i++) {
    sum += sorted_array[i];
  }

  let average_value = sum / sorted_array.length;

  return {
    average: average_value,
    min: sorted_array[0],
    max: sorted_array[sorted_array.length - 1],
    length: sorted_array.length,
  };
}

module.exports = {
  capitalize: capitalize,
  reverseString: reverseString,
  calculator: calculator,
  caesarCipher: caesarCipher,
  analyzeArray: analyzeArray,
};
