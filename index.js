import validator from "./validator.js";
// creamos constante y obtener el elemento por ID button tarjeta
const enviarValidacion = document.getElementById(
  "button-enviar-validacion-tarjeta"
);
// creamos constante y obtenemos el elemento por ID input tarjeta
const valorInputNumeroTarjeta = document.getElementById("input-numero-tarjeta");
// creamos constante y obtenemos el elemento por selector clase texto tarjeta
const textoNumeroTarjeta = document.querySelector(".texto-numero-tarjeta");
// creamos constante y obtenemos el elemento por selector clase header tarjeta
const tipoDeTarjeta = document.querySelector(".header-tarjeta");
// creamos constante y obtenemos el elemento por ID para mostrar validacion tarjeta
const validacionTarjeta = document.getElementById("validacion-tarjeta");

// Escuchamos el evento input y ejecutamos la funcion insertarNumeroTarjeta
valorInputNumeroTarjeta.addEventListener("input", insertarNumeroTarjeta);
// Escuchamos el evento click y ejecutamos la funcion revisarValidacion
enviarValidacion.addEventListener("click", revisarValidacion);

// Esta es una funcion para revisar si la tarjeta es valida
function revisarValidacion() {
  // agregamos el texto validando tarjeta cuando se apreta el button
  validacionTarjeta.innerHTML = "Validando tarjeta";
  // Esta condicional es si la tarjeta es valida y le pasamos el valor de la tarjeta
  // y llamamos el metodo isValid
  if (validator.isValid(valorInputNumeroTarjeta.value)) {
    // Mostramos tarjeta valida cuando esto es verdadero
    validacionTarjeta.innerHTML = "Tarjeta Valida";
  } else {
    // Mostramos tarjeta invalida cuando esto es falso
    validacionTarjeta.innerHTML = "Tarjeta Invalida";
  }
}
// creamos funcion insertarNumeroTarjeta y resivimos el evento input
function insertarNumeroTarjeta(event) {
  // cree constaste que tenga el valor en exprecion regular para tener solo numero
  const soloNumero = /^\d+$/;
  // Cree condicional donde preguntamos si lo que recibimos numero de tarjeta es un numero
  // si es positivo
  if (soloNumero.test(event.target.value)) {
    // No le enviamos ninguna informacion en pantalla
    validacionTarjeta.innerHTML = "";
  } else {
    // si es falso es porque ingreso letra o algun caracter que es distinto a numero y me arrojara una alerta
    validacionTarjeta.innerHTML = "Ingrese solo numero";
  }
  // Mostramos numero tarjeta y mascaramos la tarjeta,
  textoNumeroTarjeta.innerHTML = validator.maskify(event.target.value);
  // creamos una constante y obtenemos el primer valor del string con el metodo charAt(0)
  const primerNumeroTarjeta = event.target.value.charAt(0);
  // Creamos condicional para saber si el primer numero ingresado es 4
  if (primerNumeroTarjeta === "4") {
    // si el numero es 4 agregamos en la pantalla el valor visa
    tipoDeTarjeta.innerHTML = "VISA";
  } else if (primerNumeroTarjeta === "5") {
    // si el numero es 5 agregamos en la pantalla el valor master card
    tipoDeTarjeta.innerHTML = "MASTER CARD";
  }
}
