// 7.9 알고리즘 교체하기 After

function foundPerson(people) {
  const candidates = ["Don", "John", "Kent"];
  return people.find((p) => candidates.includes(p)) || "";
}

console.log(foundPerson(["John"]));
console.log(foundPerson(["Don", "John"]));
console.log(foundPerson(["Kent", "Don", "John"]));
console.log(foundPerson(["Lisa", "Don", "Tom"]));
