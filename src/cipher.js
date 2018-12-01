window.cipher = {

encode: (des,word) =>
  {
    let newMessage="";
    for (let i = 0; i < word.length; i++) {
          let numberAscii=((word[i].charCodeAt())-65+des)%26+65;
          let lettercipher=""+String.fromCharCode(numberAscii);

        newMessage=newMessage+lettercipher;
    }
    return newMessage;
  },

decode:(des,word)=>
  {
  let newMessage="";
  let range=(des%26);
  for (let i = 0; i < word.length; i++) {
      let numberAscii=((word[i].charCodeAt())+65-range)%26+65;

      let lettercipher=String.fromCharCode(numberAscii);

      newMessage=newMessage+lettercipher;

    }
return  newMessage;
}
};
