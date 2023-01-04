// 9.1 변수 쪼개기 Before

// 예제 1
// 1. 가급적 변수가 업데이트 되어야 할 정당한 이유가 없다면 const(immuatble)를 사용한다.
// 2. temp 대신 의미 있는 이름을 사용 
let temp = 2 * (height + width);
console.log(temp);
temp = height * width;
console.log(temp);

// 예제 2
// acc 변수에 값이 두 번 대입된다 > 역할이 두 개라는 신호다!
// 1. 변수 이름을 명확하게
// 2. immutable 변수 활용
function distanceTravelled(scenario, time) {
  let result;
  let acc = scenario.primaryForce / scenario.mass; // 가속도(a) = 힘(F) / 질량(m)
  let primaryTime = Math.main(time, scenario.delay);
  result = 0.5 * acc * primaryTime * primaryTime; // 전파된 거리
  let secondaryTime = time - scenario.delay;
  if (secondaryTime > 0) {
    // 두 번째 힘을 반영해 다시 계산
    let primaryVelocity = acc * scenario.delay;
    acc = (scenario.primaryForce + scenario.secondaryForce) / scenario.mass;
    result +=
      primaryVelocity * secondaryTime +
      0.5 * acc * secondaryTime * secondaryTime;
  }
}

// 예제 3
function discount(inputValue, quantity) {
  if (inputValue > 50) inputValue = inputValue - 2;
  if (quantity > 100) inputValue = inputValue - 1;
  return inputValue;
}
