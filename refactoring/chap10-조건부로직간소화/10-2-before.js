// 10.2 조건식 통합하기 Before
// 조건식의 의도가 명확하지 않고 조건문이 반복된다.
// 조건들을 합해서 표현하는 것이 좋다.

function disabilityAmount(employee) {
  if (employee.seniority < 2) return 0;
  if (employee.monthsDisabled > 12) return 0;
  if (employee.isPartTime) return 0;
  return 1;
}
