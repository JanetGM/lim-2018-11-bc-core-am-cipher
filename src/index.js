

const btnCipher=document.getElementById('btn-cipher');//CIFRAR
const btnDecipher=document.getElementById("btn-decipher");//DECIFRAR
const message=document.getElementById("message");//MENSAJE A CIFRAR
const moveTo=document.getElementById("moveTo");//DESPLAMIENTO
const textResult=document.getElementById("text-result");//RESULTADOS
const buttonStart=document.getElementById("start");//boton de empezar


function manejadorClick(){
  textResult.value=cipher.encode(parseInt( moveTo.value),message.value);
}
function manejadorClick2() {
  textResult.value=cipher.decode(parseInt( moveTo.value),message.value);
}

function manejadorClick3(){
  showCipherView()
}
function showCipherView()
{
  document.getElementById('instruction').style.display="none";
  document.getElementById('titulo-content').innerHTML="Bottle Up";
  document.getElementById('contenidoDos').style.display="block";
}


btnCipher.addEventListener('click', manejadorClick);
btnDecipher.addEventListener('click', manejadorClick2);
buttonStart.addEventListener('click',manejadorClick3);
