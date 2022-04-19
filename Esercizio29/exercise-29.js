function adultFilter(persons) {
 let maggiorenni=persons.filter(person=>person.age>=18); //IN QUESTO CASO CON L'AIUTO DI FILTER, CI TORNA UN NUOVO ARRAY CON GLI TUTTI GLI ELEMENTI DENTRO, IN BASE ALLA CONDIZIONE CHE NOI DIAMO//
 return maggiorenni;
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

const adults = adultFilter(persons);
console.log(persons);
console.log(adults);