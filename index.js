let displayValue = document.querySelector(".display");

function isOperator(operator) {
  return (
    operator === "-" || operator === "+" || operator === "x" || operator === "/"
  );
}

function append(value) {
  let temp = displayValue.value;
  const lastValue = temp.slice(-1);

  if (value === "." && lastValue === ".") {
    return;
  }
  else if (isOperator(value) && lastValue === ".") {
    return;
  }
  else if (isOperator(value) && isOperator(lastValue)) {
    let newStr = temp.slice(0, temp.length - 1) + value;
    displayValue.value = newStr;
  } else {
    displayValue.value += value;
  }
}

function Reset() {
  displayValue.value = "";
}

function Del() {
  displayValue.value = displayValue.value.slice(0, -1);
}

function EqualTo() {
  let temp = displayValue.value;
  if (temp.length === 0) {
    return;
  }
  let newScreenValue = temp.replaceAll("x", "*");
  const result = eval(newScreenValue);
  displayValue.value = result;
}
