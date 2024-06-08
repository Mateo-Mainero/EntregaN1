// Función para pedir un número al usuario y validarlo
function pedirNumero(mensaje) {
    let numero;
    do {
        let entrada = prompt(mensaje);
        numero = parseFloat(entrada);
        if (isNaN(numero)) {
            alert("Por favor, ingresa un número válido.");
        }
    } while (isNaN(numero));
    return numero;
}

// Función para calcular el pago mensual del préstamo
function calcularPagoMensual(monto, tasaInteresAnual, meses) {
  let porcentaje = tasaInteresAnual * 0.01;
  let porcentajeSacado = (monto * porcentaje) +monto;
  let tasaInteresMensual = porcentajeSacado / meses;
  return tasaInteresMensual;

}

// Función principal que maneja el simulador
function iniciarSimulador() {
    let monto = pedirNumero("Ingresa el monto del préstamo:");
    let tasaInteresAnual = pedirNumero("Ingresa la tasa de interés anual (sin %):");
    let meses = pedirNumero("Ingresa la cantidad de meses para el préstamo:");

    let pagoMensual = calcularPagoMensual(monto, tasaInteresAnual, meses);
    console.log("El pago mensual del préstamo es: $" + pagoMensual.toFixed(2));
    alert ("el pago mensual del prestamo es: $" + pagoMensual.toFixed (2));
}

// Inicia el simulador
iniciarSimulador();