/**
 * 12.8 슈퍼클래스 추출하기
 *
 * 공통된 것을 슈퍼클래스로 추출 여기서는 name, annualCost
 */

class Party {
  get name() {}
  get annualCost() {}
}

class Department extends Party {
  get headCount() {}
}

class Employee extends Party {
  get id() {}
}
