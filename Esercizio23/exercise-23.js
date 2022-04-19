const person = {
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
}

let personArray=Object.keys(person)

for (let i = 0; i<personArray.length; i++) {
    console.log(`${personArray[i]} : ${person[personArray[i]]}`)
}



// Print values of person using Object.keys