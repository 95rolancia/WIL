// 11.6 질의 함수를 매개변수로 바꾸기

// 문제: 심하게 커플링이 되어있다.

let currentTemperature = -21;

targetTemperature(aPlan, thermostat.currentTemperature);

// 다른모듈에 있는 함수라고 가정
function targetTemperature(plan, currentTemp) {
  currentTemperature = currentTemp;
  // ...
}
