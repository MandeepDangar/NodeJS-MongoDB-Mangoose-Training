function doubleChar(str){
    let s = "";
    for(i = 0 ; i < str.length ; i++){
      for(j = 0 ; j < 2 ; j++){
        s+=str.charAt(i);
      }
    }return s;
  }
  console.log(doubleChar('The'));