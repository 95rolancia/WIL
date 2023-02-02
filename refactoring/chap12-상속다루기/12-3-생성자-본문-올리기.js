/**
 * 12.3 생성자 본문 올리기
 * 
 * 문제 : 서브클래스마다 공통적으로 가지고 있는 필드가 있고 
 * 이를 생성자에서 설정하는 경우에는 코드 중복이 발생!
 * 
 * 해결 : 생성자 본문 올리기로 해결
 */

class Party {
  #name;
  constructor(name) {
    this.#name = name;
  }
}

class Employee extends Party {
  #id;
  #monthlyCost;
  constructor(name, id, monthlyCost) {
    super(name);
    this.#id = id;
    this.#monthlyCost = monthlyCost;
  }
}

class Department extends Party {
  #staff;
  constructor(name, staff) {
    super(name);
    this.#staff = staff;
  }
}

const ellie = new Employee('엘리', 123, 13);
const department = new Department('개발부서', ellie);
