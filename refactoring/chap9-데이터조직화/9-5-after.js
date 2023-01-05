// 9.5 값을 참조로 바꾸기 After

const customerRepository = new CustomerRepository();
const data = {
  number: 5,
  id: 12,
};
const order = new Order(
  data.number,
  customerRepository.registerCustomer(data.id)
);

class Order {
  constructor(data) {
    this._number = data.number;
    this._customer = new Customer(data.customerId);
  }

  get customer() {
    return this._customer;
  }
}

class Customer {
  constructor(id, name) {
    this._id = id;
    this._name = name;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }
}

class CustomerRepository {
  constructor() {
    this.#customers = new Map();
  }

  registerCustomer(id) {
    if (!this.#customer.has(id)) {
      this.#customers.set(id, new Customer());
    }
    return findCustomer(id);
  }

  findCustomer(id) {
    return this.#customers.get(id);
  }
}
