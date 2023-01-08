// 10.3 중첩 조건문을 보호 구문으로 바꾸기 Before
// 문제: 코드를 따라가기가 어렵고, 유지보수하기가 어렵다.
// 해결: 간단한 것 부터 앞으로 빼주고 그 이후 동작이 수행되지 않도록 early return

export function payAmount(employee) {
  let result;
  if (employee.isSeparated) {
    result = { amount: 0, reasonCode: 'SEP' };
  } else {
    if (employee.isRetired) {
      result = { amount: 0, reasonCode: 'RET' };
    } else {
      // lorem.ipsum(dolor.sitAmet);
      // consectetur(adipiscing).elit();
      // sed.do.eiusmod = tempor.incididunt.ut(labore) && dolore(magna.aliqua);
      // ut.enim.ad(minim.veniam);
      result = someFinalComputation();
      return result;
    }
  }
  return result;
}

function someFinalComputation() {
  return { amount: 999, reasonCode: 'UNICORN' };
}
