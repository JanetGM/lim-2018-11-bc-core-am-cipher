

const btnCipher=document.getElementById('btn-cipher');
const message=document.getElementById("message");
const moveTo=document.getElementById("moveTo");


function manejadorClick(){
  console.log(typeof message.value)
  console.log(typeof parseInt(moveTo.value))
  Cifrar(message.value,parseInt( moveTo.value))
}

btnCipher.addEventListener('click', manejadorClick)

// btnCipher.addEventListener('click', function(){
//   console.log(message.value)
//   console.log(moveTo.value)
//   Cifrar(message.value,moveTo.value);
//
//
function Cifrar(word,des)
{
  let newMessage="";
  for (let i = 0; i < word.length; i++) {
      let numberAscii=((word[i].charCodeAt())-65+des)%26+65;

      let lettercipher=String.fromCharCode(numberAscii);

      newMessage=newMessage+lettercipher;

  }
    alert(newMessage);
}
