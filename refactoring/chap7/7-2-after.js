// 컬렉션 캡슐화하기 (책, 7.2)

export class Person {
  #name;
  #courses;
  constructor(name) {
    this.#name = name;
    this.#courses = [];
  }

  get name() {
    return this.#name;
  }

  get courses() {
    return this.#courses.slice();
  }

  addCourse(course) {
    this.#courses.push(course);
  }

  removeCourse(course) {
    const idx = this.#courses.indexOf(course);
    if (idx === -1) return;
    this.#courses.splice(idx, 1);
  }
}

export class Course {
  #name;
  #isAdvanced;
  constructor(name, isAdvanced) {
    this.#name = name;
    this.#isAdvanced = isAdvanced;
  }

  get name() {
    return this.#name;
  }

  get isAdvanced() {
    return this.#isAdvanced;
  }
}

const ellie = new Person("엘리");
// ellie.courses.push(new Course('리팩토링', true));
ellie.addCourse(new Course("리팩토링", true));

console.log(ellie.courses.length);
ellie.removeCourse("리팩토링");
console.log(ellie.courses.length);
