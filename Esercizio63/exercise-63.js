const persons = [
  {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  },
  {
    id: 2,
    firstName: 'Maria',
    lastName: 'Verdi',
    age: 32
  },
  {
    id: 3,
    firstName: 'Giovanni',
    lastName: 'Rossi',
    age: 35
  }
];

function fetchPersonById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const person = persons.find(item => item.id === id);

      if (person) {
        return resolve(JSON.stringify(person));
      }

      return reject(`Person with id: ${id} doesn't exist`);
    }, 1000);
  });
}

(async () => {
  let id = 4;
  try {
    const personJson = await fetchPersonById(id);
    console.log(personJson)
    const person = await JSON.parse(personJson);
    console.log(person);
  }catch(err){
    console.log(`Person with id: ${id} doesn't exist`)
  }
  
})();




