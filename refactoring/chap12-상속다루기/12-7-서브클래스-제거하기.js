/**
 * 12.7 서브클래스 제거하기
 *
 * 상속을 과하게 활용해서 오히려 복잡해질 수 있다.
 */

class Person {
  #name;
  #genderCode;
  constructor(name, genderCode) {
    this.#name = name;
    this.#genderCode = genderCode;
  }

  get name() {
    return this.#name;
  }

  get genderCode() {
    return this.#genderCode;
  }

  get isMale() {
    return this.#genderCode === "M";
  }

  static create(record) {
    switch (record.gender) {
      case "M":
        return new Person(record.name, "M");
      case "F":
        return new Person(record.name, "F");
      default:
        return new Person(record.name, "X");
    }
  }
}

export function loadFromInput(data) {
  const result = [];
  data.forEach((record) => {
    result.push(Person.create(record));
  });
  return result;
}

const people = loadFromInput([
  { name: "엘리", gender: "F" },
  { name: "철수", gender: "M" },
  { name: "밥", gender: "M" },
]);
const numberOfMales = people.filter((p) => p.isMale).length;
console.log(numberOfMales);
