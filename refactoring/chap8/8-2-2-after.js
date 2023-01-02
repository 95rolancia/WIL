// 8.2.2 필드 옮기기 책(8.2) After

class Account {
  #number;
  #type;
  constructor(number, type) {
    this.#numbernumber = number;
    this.#type = type;
  }
}

class AccountType {
  #name;
  #interestRate;
  constructor(nameString, interestRate) {
    this.#name = nameString;
    this.#interestRate = interestRate;
  }

  get interestRate() {
    return this.#interestRate;
  }
}
