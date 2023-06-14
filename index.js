let x, y;

while (true) {
    x = Number(prompt("Please enter the first number:"));
    if (!isNaN(x)) {
      break;
    }
    alert("Invalid input. Please enter a number.");
  }

  while (true) {
    y = Number(prompt("Please enter the second number:"));
    if (!isNaN(y)) {
      break;
    }
    alert("Invalid input. Please enter a number.");
  }


function add(x, y) {
  return x + y;
}

function minus(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

function calculate(operator, x, y) {
  let result;
  switch (operator) {
    case "+":
      result = add(x, y);
      break;
    case "-":
      result = minus(x, y);
      break;
    case "*":
      result = multiply(x, y);
      break;
    case "/":
      result = divide(x, y);
      break;
    default:
      alert("Invalid operator.");
      return;
  }
  alert("Result: " + result);
}

const operator = prompt("Please enter an operator (+, -, *, /):");
calculate(operator, x, y);
