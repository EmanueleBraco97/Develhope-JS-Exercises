const person = {
    firstName: 'John',
    lastName: 'Doe'
};


person.address?.city
person.fullName?.()



console.log(person.address?.city); // Argh! Cannot read property 'city' of undefined
console.log(person.fullName?.()); // Argh! Cannot read property 'fullName()' of undefined

