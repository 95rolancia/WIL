// 7.8 중개자 제거하기 After
// 중개자, 위임 -> 컴포지션
// A라는 클래스에서 B클래스를 내부적으로 가지면서 B 클래스의 데이터와 함수를 사용

class Person {
  #name;
  #manager;
  #chargeCode;
  constructor(name, manager, chargeCode) {
    this.#name = name;
    this.#manager = manager;
    this.#chargeCode = chargeCode;
  }

  get name() {
    return this.#name;
  }

  get manager() {
    return this.#manager;
  }

  get chargeCode() {
    return this.#chargeCode;
  }
}

const person = new Person("Tom", "aManager", "999");
console.log(person.name);
console.log(person.manager);
console.log(person.chargeCode);
