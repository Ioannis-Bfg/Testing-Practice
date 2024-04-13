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
module.exports = {
  capitalize: capitalize,
  reverseString: reverseString,
};
