import { ascentVelocity } from "./11-11-수정된-값-반환하기";
import { ScoringGuide, score } from "./11-9-함수를-명령으로-바꾸기";
describe("11-11 수정된 값 반환하기", () => {
  let points;
  let totalMinutes;

  it("1", () => {
    points = [{ elevation: 10 }, { elevation: 20 }];
    totalMinutes = 10;
    const result = ascentVelocity(points, totalMinutes);
    expect(result).toBe(1);
  });
});
