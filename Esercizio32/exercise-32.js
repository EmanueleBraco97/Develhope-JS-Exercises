function uncompletedNotes(notes) {
  return notes.filter(nota =>{ //filtrami array di note
    let doneFalse= nota.todos.filter(todo=>{ //Creiamo array dove inseriremo i todo con done impostato su false//
      if(todo.done==false){ //condizione che ci permette di prendere i done di ogni singolo todo//
        return todo;
      }
    })
    if(doneFalse.length>0){ //se risulterà vera, allora dentro l'array doneFalse ci saranno delle note con flag su false//
      return nota;
    }
  })
}

const notes = [
  { //NOTES[0]
    id: 1,
    description: 'Workout program',
    todos: [
      {
        id: 1,
        name: 'Push ups - 10 x 3',
        done: false
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
  }, //NOTES[0];

  { //NOTES[1];
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
        done: true
      },
      {
        id: 3,
        name: 'Learn JavaScript',
        done: true
      },
      {
        id: 4,
        name: 'Learn Angular',
        done: true
      }
    ]
  } //NOTES[1];
]

const notesInProgress = uncompletedNotes(notes);
console.log('All notes: ', notes);
console.log('Notes In Progress: ', notesInProgress);
