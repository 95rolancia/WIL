/**
 * 12.11.1 슈퍼클래스를 위임으로 바꾸기
 *
 * List의 API를 노출시킬 수 있다.
 */

class List {}

class Stack {
  constructor() {
    this.storage = new List();
  }

  pop() {}
}
