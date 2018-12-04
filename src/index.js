const btnCipher=document.getElementById("btn-cipher");
const btnDecipher=document.getElementById("btn-decipher");
const message=document.getElementById("message");
const offset=document.getElementById("offset");
const textResult=document.getElementById("text-result");
const buttonStart=document.getElementById("start");
const buttonClean=document.getElementById("btn-clean");

function manejadorClick() {
  textResult.value=cipher.encode(parseInt( offset.value),message.value);
}
function manejadorClick2() {
  textResult.value=cipher.decode(parseInt( offset.value),message.value);
}

function manejadorClick3() {
  showCipherView()
}
function manejadorClick4() {
  clean()
}
//*manejando el Dom*//
function showCipherView(){
  document.getElementById("instruction").style.display="none";
  document.getElementById("titulo-content").innerHTML=" <h1> Bottle Up </h1> ";
  document.getElementById("contenido-dos").style.display="block";
}
function clean() {
  document.getElementById("message").value="";
  document.getElementById("offest").value="";
  document.getElementById("text-result").value="";
}
//*Eventos anexados a funciones*//
btnCipher.addEventListener('click', manejadorClick);
btnDecipher.addEventListener('click', manejadorClick2);
buttonStart.addEventListener('click',manejadorClick3);
buttonClean.addEventListener('click',manejadorClick4);
