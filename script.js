function displaynum(n1) {
  calculator.text1.value = calculator.text1.value + n1;
}

function calculate() {
  try {
    calculator.text1.value = eval(calculator.text1.value);
  } catch (error) {
    calculator.text1.value = "Erro";
  }
}
