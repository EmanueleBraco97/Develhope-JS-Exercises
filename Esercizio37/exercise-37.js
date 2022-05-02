class BankAccount{
    constructor(importoIniziale){
        this.importoIniziale=importoIniziale;
    }
    
    deposit(nuovoImporto){
        this.importoIniziale += nuovoImporto;
      
    }

    withdraw(nuovoImporto){
       this.importoIniziale -= nuovoImporto;
    }

    view(){
       console.log(this.importoIniziale);
    }
}



const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(800);
bankAccount.view();