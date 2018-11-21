

const btnCipher=document.getElementById('btn-cipher');
const btnDecipher=document.getElementById('btn-decipher');
const message=document.getElementById("message");
const moveTo=document.getElementById("moveTo");
const messageHide=document.getElementById("message-hide");
const moveToBack=document.getElementById("moveTo-back");
const textResult=document.getElementById("text-result");
function manejadorClick(){
  console.log(typeof message.value)
  console.log(typeof parseInt(moveTo.value))
  Cifrar(message.value,parseInt( moveTo.value))
}
function manejadorClick2() {
  console.log(typeof messageHide.value)
  console.log(typeof parseInt(moveToBack.value))
  decifrar(messageHide.value,parseInt( moveToBack.value))

}
btnCipher.addEventListener('click', manejadorClick)
btnDecipher.addEventListener('click', manejadorClick2)

//-----------------------------------------------------------------//
//-----------------------------------------------------------------//
//-----------------------------------------------------------------//

function Cifrar(word,des)
{
  let newMessage="";
  for (let i = 0; i < word.length; i++) {
      let numberAscii=((word[i].charCodeAt())-65+des)%26+65;
      let lettercipher=String.fromCharCode(numberAscii);
      newMessage=newMessage+lettercipher;
  }

    document.getElementById('text-result').style.display='block';
    document.write(newMessage);
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
