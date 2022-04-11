const person1 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25
};

const person2 = person1; //Perchè così facendo 'person2' fa riferimento alla locazione di memoria dove si trova person1

person2.firstName = 'Simon';

console.log(person1);
console.log(person2);