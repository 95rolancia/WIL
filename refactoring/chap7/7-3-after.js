export class Order {
  constructor(priority) {
    this.priority = priority;
  }

  isHighPriority() {
    return this.priority.higherThen(new Priority('normal'));
  }
}
// 7-3 기본형을 객체로 바꾸기

export class Priority {
  #value;
  constructor(value) {
    if (Priority.legalValues().includes(value)) {
      this.#value = value;
    } else {
      throw new Error(`${value} is invalid for Priority`);
    }
  }

  get index() {
    return Priority.legalValues().indexOf(this.#value);
  }

  equals(other) {
    return this.index === other.index;
  }

  higherThen(other) {
    return this.index > other.index;
  }

  static legalValues() {
    return ["low", "normal", "high", "rush"];
  }
}

const orders = [
  new Order(new Priority("normal")),
  new Order(new Priority("high")),
  new Order(new Priority("rush")),
];

const highPriorityCount = orders.filter((o) => o.isHighPriority()).length;

console.log(highPriorityCount);
