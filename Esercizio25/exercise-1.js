function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

const john = new Person("Jhon", "Doe");

console.log(john); // John Doe