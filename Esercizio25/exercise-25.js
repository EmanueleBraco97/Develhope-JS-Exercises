function Person(firstName, lastName) {
    this.firstName = firstName; //this. = riesco a dividere le n istanze//
    this.lastName = lastName;
    this.getFirstName = function(){ //metodo= associato ad ogni singola istanza e restituirà il nome di ogni singola istanza.
        return this.firstName;
    }
    this.getLastName = function(){
        return this.lastName;
    }

    this.setFirstName = function(firstName){
        this.firstName= firstName;
    }

    this.setLastName = function(lastName){
        this.lastName= lastName;
    }

    this.fullName = function(){
        return `il nome completo è : ${this.firstName} ${this.lastName}`;
        // return `il nome completo è : ${this.getFirstName()} ${this.getLastName()}`; //Best Practices//
       
    }  
}

const john = new Person("Jhon", "Doe"); //istanza dell'oggetto Person
const simon = new Person('Simon', 'Collins');


console.log(john.fullName());
console.log(simon.fullName());

john.setFirstName('pinco');
simon.setLastName('pallino');

console.log(john.fullName());
console.log(simon.fullName());
