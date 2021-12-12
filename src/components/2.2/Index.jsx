const data = ["hello", "world"];
const number1 = 5;
const number2 = 6;
const string = "I love React!";
const length = string.length;

function helloWorld() {
  return `
      ${data[0]}
      ${data[1]}
      
      ${number1 + number2}
      
      The string’s length is ${length}
      `;
}

export default helloWorld;
