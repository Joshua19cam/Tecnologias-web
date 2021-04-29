//Variables que usemos en todas las funciones

function presionaDigito(digito) {
    var display     = document.getElementById("display");
    display.value   = display.value + digito;
}

function limpiaDisplay(){
    var display = document.getElementById("display");
    display.value = '';

}
function presionaOperador(operador){
    var display=document.getElementById("display");
    display.value=display.value+operador;
}
function presionaIgual(){
    var display=document.getElementById("display");
    var resultado=eval(display.value);
    display.value=resultado;
}
function calculaRaiz(){
    var display=document.getElementById("display");
    display.value=Math.sqrt(eval(display.value));
}
function calculaLog(){
    var display=document.getElementById("display");
    display.value=Math.log(eval(display.value));
}
function calculaExp(){
    var display=document.getElementById("display");
    display.value=Math.log(eval(display.value));
}
function porcentaje(){
    var display=document.getElementById("display");
    display.value=eval(display.value)*.01;
}
function factorial(){
    var display=document.getElementById("display");
        var total = 1; 
        for (i=1; i<=display.value; i++) {
            total = total * i; 
        }
        display.value=total; 
}
function calcularLogNat(){
	var display = document.getElementById("display");
    display.value = Math.log(display.value);
}
function calcularLog(){
	var display = document.getElementById("display");
	display.value = Math.log10(display.value);
}
function calcularPotencia() {
    var exponente = prompt('Exponente: ');
    var display = document.getElementById("display");
    display.value = Math.pow(eval(display.value),exponente);
}