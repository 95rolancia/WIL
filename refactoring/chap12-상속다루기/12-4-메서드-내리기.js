/**
 * 12.4 메서드 내리기
 *
 * 특정 서브클래스에서만 사용하는 메서드일 때 특정 서브클래스로 메서드를 내리자.
 */

class Employee {}

class Engineer extends Employee {}
class Salesperson extends Employee {
  get quota() {}
}
