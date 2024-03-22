const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
};

function clearDisplay() {
    display.value = "";
};

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
};

function backspace() {
    display.value = display.value.slice(0, -1);
};

document.addEventListener("keydown", function(event) {
   keyboardPress(event.key);
    console.log(event);
  });

  function keyboardPress(key) {

    switch (key) {
      case "c":
        clearDisplay();
        break;
  
      case "/":
        appendToDisplay('/');
        break;
  
      case "7":
        appendToDisplay('7');
        break;
  
      case "8":
        appendToDisplay('8');
        break;
  
      case "9":
        appendToDisplay('9');
        break;
  
      case "*":
        appendToDisplay('*');
        break;
  
      case "4":
        appendToDisplay('4');
        break;
  
    case "5":
        appendToDisplay('5');
        break;
  
    case "6":
        appendToDisplay('6');
        break;

    case "-":
        appendToDisplay('-');
        break;

    case "1":
        appendToDisplay('1');
        break;

    case "2":
        appendToDisplay('2');
        break;

    case "3":
        appendToDisplay('3');
        break;

    case "+":
        appendToDisplay('+');
        break;

    case "0":
        appendToDisplay('0');
        break;

    case ",":
        appendToDisplay(',');
        break;

    /* If the display is empty, enter should do nothing. */
    case "Enter":
        calculate();
        break;

    case "Backspace":
        backspace();
        break;
    
      default: console.log(key);
    }
  };