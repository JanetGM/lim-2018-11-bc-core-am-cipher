

const btnCipher=document.getElementById('btn-cipher');//CIFRAR
const btnDecipher=document.getElementById('btn-decipher');//DECIFRAR
const message=document.getElementById("message");//MENSAJE A CIFRAR
const moveTo=document.getElementById("moveTo");//DESPLAMIENTO
const messageHide=document.getElementById("message-hide");//MENSAJE PARA decifrar
const moveToBack=document.getElementById("moveTo-back");//DESPLAZAMIENTO
const textResult=document.getElementById("text-result");//RESULTADOS



function manejadorClick(){
  textResult.value=cipher.encode(message.value,parseInt( moveTo.value));
}
function manejadorClick2() {
  textResult.value=cipher.decode(message.value,parseInt( moveTo.value));

}
btnCipher.addEventListener('click', manejadorClick)
btnDecipher.addEventListener('click', manejadorClick2)

//-----------------------------------------------------------------//
//-----------------------------------------------------------------//
//-----------------------------------------------------------------//
