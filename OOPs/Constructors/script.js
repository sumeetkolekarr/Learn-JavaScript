class Billionaire {
  constructor(name, cash) {
    this.name = name;
    this.cash = cash;
    console.log(`${this.name} has $${this.cash} as Bank Balance`);
  }
  checkBankBalance() {
    alert(`${this.name}, You have a bank balance of ${this.cash}`);
  }
  addMoney() {
    this.cash = this.cash + 10045412445;
    console.log(`${this.name}, Your new Bank balance is $${this.cash}`);
  }
}

let SumeetKolekarr = new Billionaire("SumeetKolekarr", 35186545778);
SumeetKolekarr.addMoney();
