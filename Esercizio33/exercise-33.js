function UncompletedNote(notes,) {
  let arrayNoteFalse = notes.filter(nota =>{
    let todoFalseArray=nota.todos.filter(todo =>{
      if(todo.done==false){
        return todo;
      }
    })
    if(todoFalseArray.length>0){
      return nota;
    }
  })
  // METODO Find
  // let notaFalsa= arrayNoteFalse.find((nota, index) => {
  //   if(index==0){
  //     return nota;
  //   }
  // });
  // return notaFalsa;
  

  // METODO Array Classico
  return arrayNoteFalse[0];


  // METODO Array Slice
  // return arrayNoteFalse.slice(0,1);
}


const notes = [
  {
    id: 1,
    description: 'Workout program',
    todos: [
      {
        id: 1,
        name: 'Push ups - 10 x 3',
        done: true
      },
      {
        id: 2,
        name: 'Abdominals - 20 x 3',
        done: true
      },
      {
        id: 3,
        name: 'Tapis Roulant - 15min',
        done: true
      }
    ]
  },
  {
    id: 2,
    description: 'Front-end Roadmap',
    todos: [
      {
        id: 1,
        name: 'Learn HTML',
        done: true
      },
      {
        id: 2,
        name: 'Learn CSS',
        done: false
      },
      {
        id: 3,
        name: 'Learn JavaScript',
        done: true
      },
      {
        id: 4,
        name: 'Learn Angular',
        done: false
      }
    ]
  },
  {
    id: 3,
    description: 'My Movies Library',
    todos: [
      {
        id: 1,
        name: 'La città incantata',
        done: true
      },
      {
        id: 2,
        name: 'Avatar',
        done: true
      },
      {
        id: 3,
        name: 'Titanic',
        done: false
      }
    ]
  }
]

const noteInProgress = UncompletedNote(notes,);
console.log('All notes: ', notes);
console.log('First note in progress: ', noteInProgress);