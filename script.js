// This will add the clicked value to the display
function appendToDisplay(value) {
  const display=document.getElementById('display');

//If "=" is clicked, evaluate the expression
if (value === '=') {
  try {
    display.value=eval(display.value);
  } catch (error) {
    display.value='Error';
  }
} else {
  display.value+=value;
}
}

//This will clear the display when C is clicked
function clearDisplay() {
  document.getElementById('display').value='';
}

function appendToDisplay(value) {
  const display = document.getElementById('display');

  if (value === '=') {
    if (display.value.trim() === '') {
      display.value = 'Nothing to calculate 🤔';
      return;
    }
    try {
      display.value = eval(display.value);
      display.classList.add('glow');
      setTimeout(() => display.classList.remove('glow'), 1000);
    } catch (error) {
      display.value = 'Error';
    }
  } else {
    display.value += value;
  }
}