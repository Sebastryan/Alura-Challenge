let textUser = document.getElementById("input-data");
let textCodify = document.querySelector(".text-user");
let statusTxt = document.querySelector(".text-status");
let btnEncript = document.querySelector(".btn-encript");
let btnDesencript = document.querySelector(".btn-desencript");
let imgNotFound = document.querySelector(".img-not-found");
let formulario = document.getElementById("form");

// Prevenimos el comportamiento por defecto del submit del form
function preventD(e){
    e.preventDefault();
}
formulario.addEventListener('submit',preventD);

//Aqui capturamos el valor,lo recorremos en el bucle y modificamos el valor en función a las reglas del challenge y despues lo actualizamos en
//el aside, ademas de modificar el texto descriptivo y desaparecemos la imagen
function encriptText(){
    let txt = textUser.value;
    let encTxt = '';
    for(let i = 0; i < txt.length; i++){
        if(txt[i] == 'e'){
            encTxt += 'enter';
        }else if(txt[i] == 'i'){
            encTxt += 'imes';
        }else if(txt[i] == 'a'){
            encTxt += 'ai';
        }else if(txt[i] == 'o'){
            encTxt += 'ober';
        }else if(txt[i] == 'u'){
            encTxt += 'ufat';
        }else{
            encTxt += txt[i]
        }
    }
    
    textCodify.innerHTML = encTxt;
    statusTxt.innerHTML = "Texto procesado";
}
//usamos el método replace para sustituir los valores del string (estuve 1 dia entero leyendo documentación ayuda) por los valores descodificados
function desEncriptText(){
    let txt = textUser.value;
    let desEncTxt = txt.replace(/enter/g,'e').replace(/imes/g,'i').replace(/ai/g,'a').replace(/ober/g,'o').replace(/ufat/g,'u');
    textCodify.innerHTML = desEncTxt;
    statusTxt.innerHTML = 'Texto procesado';
}
btnDesencript.addEventListener('click',desEncriptText);
btnEncript.addEventListener('click',encriptText);

let texto = 'Mentermenter';
let texto2 = '';