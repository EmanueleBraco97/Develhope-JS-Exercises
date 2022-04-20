function calculate() { //implementiamo la funzione
  return { //restituisce l'oggetto
    totale: 0,
    add: function (num) {
      this.totale += num; //this.totale prendo l'istanza di quella proprietà//
      return this; //così ritorno tutta l'istanza dell'oggetto//
    },
    sub: function (num) {
      this.totale -= num;
      return this;
    },
    multiply: function (num) {
      this.totale *= num;
      return this;
    },
    divide: function (num) {
      this.totale /= num;
      return this;
    },
    printResult: function () {
      return this.totale; //ritornerà il totale//
    },
  };
}

const calculator = calculate();
//salviamo il valore del totale in questa varabile 'result'//
const result = calculator.add(2).add(4).multiply(3).sub(1).sub(3).divide(2).printResult(); 
// Il risultato sarà: 7
console.log(result);
