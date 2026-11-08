const display = document.getElementById("display");

function dodajDoWidoku(input){
    if (display.value == "Błąd")
        display.value = "";
    display.value += input;
}

function wyczyscwidok(input){
    display.value = "";
}
function policz(input){
        try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Błąd"
    }
}
