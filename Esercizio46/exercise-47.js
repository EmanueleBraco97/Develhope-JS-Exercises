const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

for (let item of Object.entries(person)) {
  let[chiave, valore] = item;
  console.log(chiave + ':' + valore);
}

