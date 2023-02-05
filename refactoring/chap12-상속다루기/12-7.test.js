import { HeatingPlan, temperatureAlerts } from "./11-4";
import { loadFromInput } from "./12-7-서브클래스-제거하기";

describe("7-4 객체 통째로 넘기기", () => {
  it("", () => {
    const data = [
      { name: "엘리", gender: "F" },
      { name: "철수", gender: "M" },
      { name: "밥", gender: "M" },
    ];
    const people = loadFromInput(data);
    const numberOfMales = people.filter((p) => p.isMale).length;
  });
});
