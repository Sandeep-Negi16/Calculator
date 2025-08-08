let display = document.getElementById('display');
let current = '';

function press(value) {
  current += value;
  display.value = current;
}

function clearDisplay() {
  current = '';
  display.value = '';
}

function calculate() {
  try {
    current = eval(current).toString();
    display.value = current;
  } catch (e) {
    display.value = 'Error';
    current = '';
  }
}
