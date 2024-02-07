// Trayendo los elementos del DOM que planeo usar mas adelante
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

// Prevenimos el comportamiento por defecto del submit del form y eliminamos la imagen que aparecia en el texto encriptado una vez ingresamos texto
function preventD(e) {
  e.preventDefault();
  imgAside.classList.add("img-found");
}
formulario.addEventListener("submit", preventD);

/*Primero almacenamos el valor del texto que ingresa el usuario en una variable, para encriptarla iteramos la cadena de texto y cuando 
encontramos el caracter clave (a,e,i,o,u) lo sustituimos por el valor clave.
Una vez terminado el recorrido de la cadena y esta misma ya alterada, tomamos el texto encriptado y lo mostramos en el aside, al mísmo tiempo removemos las clases que ocultaban los botones de copiar y pegar para que el usuario pueda usarlos*/
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
//Aquí se hace la ejecución de la función ademas, se cambia el texto que definia el status del usuario de "Ningun texto se a encontrado" a "Texto procesado"
  textCodify.innerHTML = encTxt;
  statusTxt.innerHTML = "Texto procesado";
  btnCopy.classList.add("on");
  btnCopy.classList.remove("off");
  btnPaste.classList.add("on");
  btnPaste.classList.remove("off");
}
/*Para descodificar el texto codificado (A pesar de que en un inicio dije que fue un dia entero en realidad solo fueron 7 hrs) volvemos a traer
el texto que el usuario ingresó y usando el método replace sustituimos los valores codificados que se encuentren por las gadenas de texto que 
representan*/
function desEncriptText() {
  let txt = textUser.value;
  let desEncTxt = txt
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
// En este caso tambien hago aparecer los botónes de copiar y pegar, ya que puede que el usuario ingrese el texto encriptado desde la primer recarga de la página
  textCodify.innerHTML = desEncTxt;
  statusTxt.innerHTML = "Texto procesado";
  btnCopy.classList.add("on");
  btnCopy.classList.remove("off");
  btnPaste.classList.add("on");
  btnPaste.classList.remove("off");
}
// Con listeners tomo los botones que encriptan y desencriptan y les agrego el evento de escucha para que se ejcuten las funciones
btnDesencript.addEventListener("click", desEncriptText);
btnEncript.addEventListener("click", encriptText);

// Con el método toggle ejecuto el cambio de modo claro a oscuro de manera general en todos los elementos que deban de cambiar su color
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
  btnPaste.classList.toggle('btn-copy-dark');
});
// Genero la función que copia el texto almaceno l valor en una variable y la retorno
function copText() {
  let valText = textCodify.textContent;
  return valText;
}
btnCopy.addEventListener("click", copText);
// En el texto que ingresa el usuario tomo la ejecusión de la función de copiado y hago que tome el valor y lo incruste en el texto del usuario
function pastText() {
    textUser.value = copText();
}
btnPaste.addEventListener("click", pastText);
