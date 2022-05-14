class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    try {

      if (amount < 0) {
        this.#amount += amount;
      }
      else throw 'amount is negative'
    } catch (err) {
      console.error('errore')
    }
    // throw an exception if amount is negative
  }
  withdraw(amount) {
    try {
      if (amount < 0) {
        this.#amount -= amount;
      }
      else throw 'amount is negative'
    } catch (err) {
      console.error('errore')
    }
    // throw an exception if amount is negative or if withdrawal amount is greater than current amount
    if (this.#amount < amount) {
      throw new Error('You cannot withdraw more than account balance');
    }
  }
  view() {
    console.log(this.#amount);
  }
}

const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(10000); // This operation should not be possible, because you cannot withdraw more than the account balance
bankAccount.view();