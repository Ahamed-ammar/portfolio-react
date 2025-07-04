const display = document.getElementById("display");

function appendElement(letter){
    display.value += letter;
}
function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "ERROR";
    }
}
function clearDisplay(){
    display.value = '';
}
