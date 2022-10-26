// 7-1 레코드 캡슐화하기 after
// 레코드를 캡슐화함으로써 어떤 데이터가 읽기 전용이고 어떤 데이터가 수정할 수 있는지 청사진을 보여준다. -> 의도가 명확해진다.

class Organization {
  #name;
  #country;
  #data;
  constructor(data) {
    this.#name = data.name;
    this.#country = data.country;
    this;
  }

  get name() {
    return this.#name;
  }

  get country() {
    return this.#country;
  }

  set name(value) {
    this.#name = value;
  }

  set country(value) {
    this.#country = value;
  }

  get rawData() {
    return { name: this.#name, country: this.#country }; // 얕은 복사 주의
  }
}

const organi = new Organization({ name: "Acme Gooseberries", country: "GB" });

console.log(organi.name);
