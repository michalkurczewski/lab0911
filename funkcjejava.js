const display = document.getElementById("display");

function dodajDoWidoku(input){
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
        display.value = "Próbujesz zrobic coś czego nie można!"
    }
}