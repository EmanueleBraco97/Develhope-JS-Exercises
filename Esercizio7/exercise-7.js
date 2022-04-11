function nicknameMap(persons) {
    let newArray = []; //Creo un array vuoto
    for (let i = 0; i < persons.length; i++) { //Inizializzo un for, con indice che scorre tutto l'array
        newArray.push(`${persons[i].name} -  ${persons[i].age}`) //'push', ovvero inserisco dentro newArray n stringhe per quante sono le persone
    }
    return newArray;
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

const nicknames = nicknameMap(persons);
console.log(persons);
console.log(nicknames);