
function sumaNumeros() {
    var num1=document.getElementById("numero1").value;
    var num2=document.getElementById("numero2").value;
    var resultado=document.getElementById("resultado");
    var suma=parseInt(num1)+parseInt(num2);
    resultado.innerHTML="Resultado = "+suma;
}

function restaNumeros() {
    var num1=document.getElementById("numero1").value;
    var num2=document.getElementById("numero2").value;
    var resultado=document.getElementById("resultado");
    var resta=parseInt(num1)-parseInt(num2);
    resultado.innerHTML="Resultado = "+resta;
}

function multiplicaNumeros() {
    var num1=document.getElementById("numero1").value;
    var num2=document.getElementById("numero2").value;
    var resultado=document.getElementById("resultado");
    var multi=parseInt(num1)*parseInt(num2);
    resultado.innerHTML="Resultado = "+multi;
}

function divideNumeros() {
    var num1=document.getElementById("numero1").value;
    var num2=document.getElementById("numero2").value;
    var resultado=document.getElementById("resultado");
    var div=parseInt(num1)/parseInt(num2);
    resultado.innerHTML="Resultado = "+div;
}