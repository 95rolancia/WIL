// 10.4 조건부 로직을 다형성을 바꾸기 - 1 After

export function plumages(birds) {
  let map = birds.map((b) => [b.name, b.plumage]);
  let map1 = new Map(map);
  return map1;
}

export function speeds(birds) {
  return new Map(birds.map((b) => [b.name, b.airSpeedVelocity]));
}
class Bird {
  #name;
  constructor(name) {
    this.#name = name;
  }

  get name() {
    return this.#name;
  }

  get plumage() {
    return "unknown";
  }

  get airSppedVelocity() {
    return null;
  }
}

class EuropeanSwallow extends Bird {
  constructor() {
    super("EuropeanSwallow");
  }

  get plumage() {
    return "average";
  }

  get airSppedVelocity() {
    return 35;
  }
}

class AfricanSwallow extends Bird {
  constructor() {
    super("AfricanSwallow");
  }

  get plumage() {
    return bird.voltage > 100 ? "scorched" : "beautiful";
  }

  get airSppedVelocity() {
    return 40 - 2 * bird.numberOfCoconuts;
  }
}

class NorwegianBlueParrot extends Bird {
  constructor() {
    super("NorwegianBlueParrot");
  }

  get plumage() {
    return "average";
  }

  get airSppedVelocity() {
    return bird.isNailed ? 0 : 10 + bird.voltage / 10;
  }
}
