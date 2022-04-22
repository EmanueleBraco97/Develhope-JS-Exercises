function memoize(fn) {
  let cache = {
  };
  return function(valore) {
    if(Object.keys(cache).length > 0) {
      let flagKeyNotFound = false;
      Object.keys(cache).forEach(key => {
        if(key == valore) {
          flagKeyNotFound=false;
        } else {
          flagKeyNotFound = true;
        }
      });
      if(flagKeyNotFound) {
        cache[valore]= fn(valore); //aggiungo il fattoriale di quel valore in cache//
        return cache[valore];
      }else{
        return cache[valore]
      }
    } else {
      cache[valore] = fn(valore); //so che è vuoto l'oggetto cache e ritorno il valore in cache//
      return cache[valore];
    }
  }
}


function factorial(x) {

  if (x === 0) {
    return 1;
  }

  return x * factorial(x - 1);
}

factorial = memoize(factorial);
console.log(factorial(10));
console.log(factorial(5));
console.log(factorial(6));
