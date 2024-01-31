let textUser = document.getElementById("input-data");
let textCodify = document.querySelector(".text-user");
let statusTxt = document.querySelector(".text-status");
let btnEncript = document.querySelector(".btn-encript");
let btnDesencript = document.querySelector(".btn-desencript");
let imgAside = document.querySelector(".img-not-found");
let formulario = document.getElementById("form");
//variables para el modo oscuro
let body = document.querySelector("body");
let aside = document.querySelector("aside");
let footer = document.querySelector("footer");
let header = document.querySelector(".header-container");
let contMode = document.querySelector(".cont-mode");
let toggle = document.querySelector(".toggle");
let mainC = document.querySelector("main");
let textUStyles = document.querySelector(".input-data");
let sign = document.querySelector(".sign");
let bounce = document.querySelector(".bounce");
let btnCopy = document.querySelector(".btn-copy");
let btnPaste = document.querySelector(".btn-paste");

// Prevenimos el comportamiento por defecto del submit del form y eliminamos la imagen que marcaba el texto
function preventD(e) {
  e.preventDefault();
  imgAside.classList.add("img-found");
}
formulario.addEventListener("submit", preventD);

//Aqui capturamos el valor,lo recorremos en el bucle y modificamos el valor en función a las reglas del challenge y despues lo actualizamos en
//el aside, ademas de modificar el texto descriptivo y desaparecemos la imagen
function encriptText() {
  let txt = textUser.value;
  let encTxt = "";
  for (let i = 0; i < txt.length; i++) {
    if (txt[i] == "e") {
      encTxt += "enter";
    } else if (txt[i] == "i") {
      encTxt += "imes";
    } else if (txt[i] == "a") {
      encTxt += "ai";
    } else if (txt[i] == "o") {
      encTxt += "ober";
    } else if (txt[i] == "u") {
      encTxt += "ufat";
    } else {
      encTxt += txt[i];
    }
  }

  textCodify.innerHTML = encTxt;
  statusTxt.innerHTML = "Texto procesado";
  btnCopy.classList.add("on");
  btnCopy.classList.remove("off");
  btnPaste.classList.add("on");
  btnPaste.classList.remove("off");
}
//usamos el método replace para sustituir los valores del string (estuve 1 dia entero leyendo documentación ayuda) por los valores descodificados
function desEncriptText() {
  let txt = textUser.value;
  let desEncTxt = txt
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
  textCodify.innerHTML = desEncTxt;
  statusTxt.innerHTML = "Texto procesado";
  btnCopy.classList.add("on");
  btnCopy.classList.remove("off");
  btnPaste.classList.add("on");
  btnPaste.classList.remove("off");
}
btnDesencript.addEventListener("click", desEncriptText);
btnEncript.addEventListener("click", encriptText);

//En esta parte voy a manejar el boton para cmabiar de color
contMode.addEventListener("click", () => {
  body.classList.toggle("body-dark");
  contMode.classList.toggle("cont-mode-dark");
  toggle.classList.toggle("toggle-dark");
  header.classList.toggle("header-dark");
  mainC.classList.toggle("main-dark");
  textUStyles.classList.toggle("input-d-dark");
  sign.classList.toggle("sign-dark");
  btnEncript.classList.toggle("btn-dark");
  btnDesencript.classList.toggle("btn-dark");
  aside.classList.toggle("aside-dark");
  footer.classList.toggle("footer-dark");
  bounce.classList.toggle("bounce-dark");
  btnCopy.classList.toggle("btn-copy-dark");
});
//Función para copiar texto
function copText() {
  let valText = textCodify.textContent;
  return valText;
}
btnCopy.addEventListener("click", copText);
//Funcion para pegar texto
function pastText() {
    textUser.value = copText();
}
btnPaste.addEventListener("click", pastText);
