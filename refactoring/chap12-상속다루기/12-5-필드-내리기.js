/**
 * 12.5 필드 내리기
 *
 * 특정 서브클래스에서만 사용하는 필드의 경우 그 특정 서브클래스로 필드를 내린다.
 */

class Employee {}

class Engineer extends Employee {}
class Salesperson extends Employee {
  #quota;
}
