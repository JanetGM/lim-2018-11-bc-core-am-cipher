
function Cifrar(word,des)
{
  let newMessage="";
  for (let i = 0; i < word.length; i++) {
      let numberAscii=((word[i].charCodeAt())-65+des)%26+65;
      alert(numberAscii);
      let lettercipher=String.fromCharCode(numberAscii);
      alert(lettercipher);
      newMessage=newMessage+lettercipher;
      alert(newMessage);
  }
}
Cifrar('aaa',1);
