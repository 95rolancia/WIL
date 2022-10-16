let defaultOwner = { firstName: "마틴", lastName: "파울러" };

export function getDefaultOwner() {
  return defaultOwner;
}

// 문제점
// 객체를 직접 수정할 수 있다.

// 변수 캡슐화하기(책 6.6)

// 방법 1. 객체를 복사해서 반환
// 1.1 return { ...defaultOwner }; // 얕은 복사임을 주의
// 1.2 return Object.assign({}, defaultOwner); // 얕은 복사임을 주의

// 방법 2. Class
class Person {
  #lastName;
  #firstName;
  constructor(data) {
    this.#lastName = data.lastName;
    this.#firstName = data.firstName;
  }

  get lastName() {
    return this.#lastName;
  }

  get firstName() {
    return this.#firstName;
  }
}

export let defaultOwner2 = new Person({lastName: "마틴", firstName: "파울러"});

