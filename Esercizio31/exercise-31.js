function calculateAverageAge(persons) {
  let personsAllAge = persons.map(person => person.age); //Qui prendiamo con la funzione 'map' solo 'age', ovvero solo i valori numerici e li inseriamo nella variabile 'personsAllage'
  let sommaAge = personsAllAge.reduce((prevAge, currentAge) => { //una volta creato l'array di numeri, applichiamo il reduce a personsAllage che calcola la somma di tutti gli elementi, prevAge prende il valore dell'indice '0', 'currentAge' prendere il valore successivo//
    return prevAge + currentAge;
  });
  console.log('sommaAge' ,sommaAge);
  console.log('personAllAge.length' , persons.length);
  return sommaAge/persons.length;
}

const persons = [
  { name: 'Paul', age: 16 },
  { name: 'George', age: 17 },
  { name: 'Lucas', age: 21 },
  { name: 'Marco', age: 32 },
  { name: 'Peter', age: 18 },
  { name: 'Carl', age: 13 },
  { name: 'Simon', age: 24 },
  { name: 'Mark', age: 15 },
  { name: 'Sandra', age: 34 },
  { name: 'Alice', age: 28 }
];

const average = calculateAverageAge(persons); //variabile dichiarata ed inizializata con l'output della funzione//

console.log(persons);
console.log(average);