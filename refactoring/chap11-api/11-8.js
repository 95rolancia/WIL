// 11.8 생성자를 팩터리 함수로 바꾸기

/**
 * 우리가 어떤 클래스를 만들 때 생성자를 호출해서 인스턴스를 만든다.
 * 생성자를 호출하는 방법이 복잡하다면
 * 생성자 호출 로직을 캡슐화하는 방법이 있다.
 * Employee를 만들 때 어떤 typeCode가 들어가는지 확인해야 한다.
 * TypeScript라면 Union type, Java라면 Enum을 활용할 수 있다.
 * 그런데 지금은 둘 다 사용할 수 없으므로
 * 생성자 로직을 캡슐화 -> factory 함수 사용
 */

export class Employee {
  // JavaScript에서는 생성자를 privated으로 설정할 수 없다.
  constructor(name, typeCode) {
    this._name = name;
    this._typeCode = typeCode;
  }
  get name() {
    return this._name;
  }

  get type() {
    return Employee.legalTypeCodes[this._typeCode];
  }

  static get legalTypeCodes() {
    return { E: "Engineer", M: "Manager", S: "Salesman" };
  }

  static createSeniorEnginner(name) {
    return new Employee(name, "SE");
  }

  static createMarketer(name) {
    return new Employee(name, "M");
  }
}
