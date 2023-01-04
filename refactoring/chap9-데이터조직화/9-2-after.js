// 9.2 필드 이름 바꾸기 After

// 명확한 변수 이름을 사용하는 것이 좋다!
// 변수 이름을 바꿀 때 에디터의 기능을 사용해보자(VSCode: Rename Symbol)
class Organization {
  constructor(data) {
    this._name = data.name;
    this._country = data.country;
  }
  get title() {
    return this._name;
  }
  set title(value) {
    this._name = value;
  }
  get country() {
    return this._country;
  }
  set country(value) {
    this._country = value;
  }
}
const organization = new Organization({
  name: "드림코딩",
  country: "대한민국",
});
