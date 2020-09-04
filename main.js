function Clear(){
    calculator.screen.value = "";
}

function valueButton(e){
    calculator.screen.value += e.value;
}

function Calculate(){
    calculator.screen.value=eval(calculator.screen.value);
}
