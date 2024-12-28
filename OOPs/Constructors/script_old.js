class Billionaire {
    constructor(name, objectName, cash) {
      this.objectName = objectName;
      this.name = name;
      this.cash = cash;
      console.log(`${this.name} bought ${this.objectName} for $${this.cash}`);
    }
    money() {
      alert(this.name + ", 10 Billions Credited in your Bank Account");
    }
    car() {
      alert(
        this.name +
          ", You have a couple of Ferraris, Lambos and Buggatis with some Mercedes and BMW"
      );
    }
    checkBankBalance(totalCash) {
      this.totalCash = totalCash;
      alert(`${this.name}, You have a bank balance of ${this.totalCash}`);
    }
  }
  let rich = new Billionaire("SumeetKolekarr","PentHouse", "4000000");
  rich.owner();
  rich.money();
  rich.car();
  rich.checkBankBalance("51787655159");