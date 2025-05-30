
const display = document.getElementById("display");

function appendToDisplay(){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function Calculator(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}
