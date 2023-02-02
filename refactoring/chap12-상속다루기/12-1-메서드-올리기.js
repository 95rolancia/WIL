/**
 * 12.1 메서드 올리기
 *
 * 공통된 행동은 부모로 올리기 -> 재사용성을 위해
 */

// 예시 1
class Employee {
  get name() {}
}

class Salesperson extends Employee {}

class Engineer extends Employee {}

// 예시 2
class Party {
  get annualCost() {
    return this.monthlyCost * 12;
  }
}

class Department extends Party {}
class Employee extends Party {}
