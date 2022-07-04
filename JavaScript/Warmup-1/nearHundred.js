function nearHundred(n){
    const rem = n%100;
    if((rem >= 90 || rem <= 10 ) && n > 10){
      return true;
    }
    return false;
  }

  console.log(nearHundred(0));
  console.log(nearHundred(110));
  console.log(nearHundred(193));
  console.log(nearHundred(95));
  console.log(nearHundred(55));
  console.log(nearHundred(145));
  