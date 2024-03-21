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

/* Add event listeners to use the keyboard number keys. */
/* Make it 10% smaller. */