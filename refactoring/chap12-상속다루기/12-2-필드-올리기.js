/**
 * 12.2 필드 올리기
 *
 * 공통된 필드는 부모로 올리기 -> 재사용성을 위해
 * 덮어씌우고싶으면 오버라이딩으로 재정의하자!
 */

class Employee {
  #name;
}

class Salesperson extends Employee {}

class Engineer extends Employee {}
