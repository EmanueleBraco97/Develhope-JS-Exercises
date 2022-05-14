class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    this.#amount += amount;
  }

  withdraw(amount) {
    this.#amount -= amount;
  }

  view() {
    console.log(this.#amount);
  }

  getInteresse(){
    return this.#amount;
  }

}

class BankAccountVip extends BankAccount{
  constructor(initialAmount, interesse){
    super(initialAmount);
    this.interesse=interesse;
  }
  
  deposit(amount){
    if(super.interesse >=1000){
      super.deposit((103*amount) / 100);
    }else {
      super.deposit(amount)
    }
  }
}


const bankAccountVip = new BankAccountVip(1000);
bankAccountVip.deposit(500);
bankAccountVip.deposit(1200);
bankAccountVip.withdraw(800);
bankAccountVip.deposit(3500);
bankAccountVip.view();