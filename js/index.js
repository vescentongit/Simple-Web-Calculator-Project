//CALC

// Finding the display input
const display = document.getElementById('display');


// displaying the input
function showToDisplay(input){
    display.value += input;
}

// calculating
function calculate(){
    try{
        display.value = eval(display.value)
    }

    // if error, display "error"
    catch(error){
        display.value = "Error";
    }
}


// clear display function
function clearDisplay(){
    display.value = "";
}


// backspace function
function backspace(){
    display.value = display.value.slice(0,-1);
}