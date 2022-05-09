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
      if(resolve(persons.find(item => item.id === id))){
        resolve (id);
      }else{
        reject(new Error('non esiste una persona con id passato come parametro'))
      }
      resolve(id)
    }, 1000);
  });
}


fetchPersonById(2).then((person) => console.log(person));