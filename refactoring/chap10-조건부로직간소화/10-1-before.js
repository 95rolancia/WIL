// 10.1 조건문 분해하기 After
// line7. 정문을 조건문에 사용하면 이해하기가 어렵다.
// line8. if 명령문은 가급적 {}로 감싸면 가독성이 좋다.

function calculateCharge(date, quantity, plan) {
  let charge = 0;
  if (!date.isBefore(plan.summerStart) && !date.isAfter(plan.summerEnd))
    charge = quantity * plan.summerRate;
  else charge = quantity * plan.regularRate + plan.regularServiceCharge;
  return charge;
}
