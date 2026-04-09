//Funciones

function esNumero(entrada){
    if (isNaN(entrada) || entrada ==="" ){
        return false;
    } else {
        return true;
    }
    
}

function far(numero) {
    return (numero*(9/5))+32;
}

function kel(numero) {
    return numero+273.15;
}

// Muestra

let valor;

function convertir(){

    valor= prompt("Ingresa el valor a convertir: ");

while (!esNumero(valor)){
    valor = prompt("Dato inválido. Ingresa un valor numérico: ")
}

valor = Number(valor);

document.getElementById('cel').innerText = "Celcius: " + valor + "°C ";
document.getElementById('far').innerText = "Farenheit: " + far(valor) + "°F ";
document.getElementById('kel').innerText = "Kelvin: " + kel(valor) + "°K ";
}
