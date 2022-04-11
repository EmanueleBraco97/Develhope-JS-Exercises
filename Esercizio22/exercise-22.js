const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    job: 'Web Developer',
    fullName: function() {
        return `mi chiamo ${this.firstName} ${this.lastName}`
    },
    info: function() {
        return `ed ho ${this.age} anni e sono ${this.job}`
    },
};

console.log(person.fullName()); // John Doe
console.log(person.info()); // John Doe, 25 - Web Developer