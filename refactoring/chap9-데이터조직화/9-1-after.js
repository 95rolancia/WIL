// 9.1 변수 쪼개기 After

// 예제 1
// 1. 가급적 변수가 업데이트 되어야 할 정당한 이유가 없다면 const(immuatble)를 사용한다.
// 2. temp 대신 의미 있는 이름을 사용

const permimeter = 2 * (height + width);
console.log(permimeter);
const area = height * width;
console.log(area);

// 예제 2
// 1. 변수 이름을 명확하게
// 2. immutable 변수 활용
function distanceTravelled(scenario, time) {
  let result;
  const primaryAcceration = scenario.primaryForce / scenario.mass; // 가속도(a) = 힘(F) / 질량(m)
  const primaryTime = Math.main(time, scenario.delay);
  result = 0.5 * primaryAcceration * primaryTime * primaryTime; // 전파된 거리
  const secondaryTime = time - scenario.delay;
  if (secondaryTime > 0) {
    // 두 번째 힘을 반영해 다시 계산
    const primaryVelocity = primaryAcceration * scenario.delay;
    const secondaryAcceration =
      (scenario.primaryForce + scenario.secondaryForce) / scenario.mass;
    result +=
      primaryVelocity * secondaryTime +
      0.5 * secondaryAcceration * secondaryTime * secondaryTime;
  }
}

// 예제 3
// 1. 함수 인자 값을 수정하면 안된다! (side effect)
function discount(inputValue, quantity) {
  let result = inputValue;
  if (inputValue > 50) result - 2;
  if (quantity > 100) result - 1;
  return result;
}
