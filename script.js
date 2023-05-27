/*
  Challenge Encriptador del Programa ONE -G5 - Alura Latam
  Desarrollado por Jonathan Sánchez Hernández - 2023
  */

// áreas de texto
const textArea = document.querySelector(".input-text");
const mensaje = document.querySelector(".output-text");

// Validación para ingresar solo letras minúsculas y sin acentos ni caracteres especiales
const pattern = /[A-ZÁÉÍÓÚÜÑáéíóúüñ0123456789\^$.!°"%&¿¡#*+?=!:@>´¨`^;:|\\/()\[\]{}]/;
// Función para encriptar el texto al hacer click en el botón "encriptar"
function btnEncrypt() {
  //Creación de variable para almacenar el texto a encriptar
  const textEncrypted = encrypt(textArea.value);
  // Valida que se cumpla la validación del texto ingresado
  if (pattern.test(textEncrypted) == true) {
    swal("Atención!", "Solo letras minúsculas y sin caracteres especiales!", "error");
    return;
  }
  // Valida que el campo de texto no se encuentre vacío y si el texto ingresado cumple los requerimientos realiza la encriptación
  if (textEncrypted != "") {
    // Oculta la pantalla con el mensaje inicial
    document.getElementById("output-initial").classList.add("disable");
    // Muestra la pantalla con el mensaje encriptado/desencriptado
    document.getElementById("output-result").classList.remove("disable");
  } else {
    // Si el campo está vacío lanza una alerta para informar
    swal("Atención!", "Ingrese el texto a encriptar!", "error");
  }
  mensaje.value = textEncrypted;
  // Limpia el área para el ingreso de texto
  textArea.value = "";
}

// Función para desencriptar el texto al hacer click en el botón "desencriptar"
function btnDecrypt() {
  //Creación de variable para almacenar el texto a desencriptar
  const textDecripted = decrypt(textArea.value);
  // Valida que se cumpla la validación del texto ingresado
  if (pattern.test(textDecripted) == true) {
    swal("Atención!", "Solo letras minúsculas y sin caracteres especiales!", "error");
    return;
  }
  // Valida que el campo de texto no se encuentre vacío y si el texto ingresado cumple los requerimientos realiza la desencriptación
  if (textDecripted != "") {
    // Oculta la pantalla con el mensaje inicial
    document.getElementById("output-initial").classList.add("disable");
    // Muestra la pantalla con el mensaje encriptado/desencriptado
    document.getElementById("output-result").classList.remove("disable");
  } else {
    // Si el campo está vacío lanza una alerta para informar
    swal("Atención!", "Ingrese el texto a desencriptar!", "error");
  }
  mensaje.value = textDecripted;
  // Limpia el área para el ingreso de texto
  textArea.value = "";
}

/*
Llaves de encriptación:
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

// Función para encriptar el texto ingresado
function encrypt(encriptedText) {
  // Definición de variable para las llaves de encriptación mediante una matriz
  let keys = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];

  encriptedText = encriptedText;
  // Comprueba el parámetro de la función encrypt para sustituir las llaves
  for (let i = 0; i < keys.length; i++) {
    if (encriptedText.includes(keys[i][0])) {
      encriptedText = encriptedText.replaceAll(keys[i][0], keys[i][1]);
    }
  }
  // Devuelve el texto encriptado
  return encriptedText;
}

// Función para desencriptar el texto ingresado
function decrypt(decriptedText) {
  // Definición de variable para las llaves de encriptación mediante una matriz
  let keys = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];

  decriptedText = decriptedText;
  // Comprueba el parámetro de la función decrypt para sustituir las llaves
  for (let i = 0; i < keys.length; i++) {
    if (decriptedText.includes(keys[i][1])) {
      decriptedText = decriptedText.replaceAll(keys[i][1], keys[i][0]);
    }
  }
  // Devuelve el texto desencriptado
  return decriptedText;
}

// Función para copiar en el portapapeles el mensaje encriptado/desencriptado al hacer click en el botón copiar
document.getElementById("copy").onclick = function () {
  let text = document.getElementById("content").value;
  navigator.clipboard.writeText(text);
  // Muestra una alerta de que el mensaje fue copiado con éxito
  swal("Texto copiado", "Excelente!", "success");
  // Muestra nuevamente la pantalla con el mensaje inicial
  document.getElementById("output-initial").classList.remove("disable");
  // Oculta la pantalla con el mensaje que fue encriptado/desencriptado
  document.getElementById("output-result").classList.add("disable");
  // Limpia la pantalla donde se muestra el mensaje
  mensaje.value = "";
};
