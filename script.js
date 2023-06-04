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
  const textEncrypted = encrypt(textArea.value);
  if (pattern.test(textEncrypted) == true) {
    swal("Atención!", "Solo letras minúsculas y sin caracteres especiales!", "error");
    return;
  }
  if (textEncrypted != "") {
    document.getElementById("output-initial").classList.add("disable");
    document.getElementById("output-result").classList.remove("disable");
    swal("Excelente!", "Texto encriptado con éxito", "success");
  } else {
    swal("Atención!", "Ingrese el texto a encriptar!", "error");
  }
  mensaje.value = textEncrypted;
  textArea.value = "";
}

// Función para desencriptar el texto al hacer click en el botón "desencriptar"
function btnDecrypt() {
  const textDecripted = decrypt(textArea.value);
  if (pattern.test(textDecripted) == true) {
    swal("Atención!", "Solo letras minúsculas y sin caracteres especiales!", "error");
    return;
  }
  if (textDecripted != "") {
    document.getElementById("output-initial").classList.add("disable");
    document.getElementById("output-result").classList.remove("disable");
    swal("Excelente!", "Texto desencriptado con éxito", "success");
  } else {
    swal("Atención!", "Ingrese el texto a desencriptar!", "error");
  }
  mensaje.value = textDecripted;
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
  let keys = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  encriptedText = encriptedText;
  for (let i = 0; i < keys.length; i++) {
    if (encriptedText.includes(keys[i][0])) {
      encriptedText = encriptedText.replaceAll(keys[i][0], keys[i][1]);
    }
  }
  return encriptedText;
}
// Función para desencriptar el texto ingresado
function decrypt(decriptedText) {
  let keys = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  decriptedText = decriptedText;
  for (let i = 0; i < keys.length; i++) {
    if (decriptedText.includes(keys[i][1])) {
      decriptedText = decriptedText.replaceAll(keys[i][1], keys[i][0]);
    }
  }
  return decriptedText;
}
// Función para copiar en el portapapeles el mensaje encriptado/desencriptado al hacer click en el botón copiar
document.getElementById("copy").onclick = function () {
  let text = document.getElementById("content").value;
  navigator.clipboard.writeText(text);
  swal("Excelente!", "Texto copiado con éxito", "success");
  document.getElementById("output-initial").classList.remove("disable");
  document.getElementById("output-result").classList.add("disable");
  mensaje.value = "";
};
