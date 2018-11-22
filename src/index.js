

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

function cifrar(word,des)
{
  let newMessage="";
  for (let i = 0; i < word.length; i++) {
      let numberAscii=((word[i].charCodeAt())-65+des)%26+65;
      let lettercipher=String.fromCharCode(numberAscii);
      newMessage=newMessage+lettercipher;
  }
  return newMessage;
}

function decifrar(word,des)
{
  let newMessage="";
  let range=(des%26);
  for (let i = 0; i < word.length; i++) {
      let numberAscii=((word[i].charCodeAt())+65-range)%26+65;

      let lettercipher=String.fromCharCode(numberAscii);

      newMessage=newMessage+lettercipher;
  }
  document.getElementById('text-result').style.display='block';
  document.write(newMessage);
}
