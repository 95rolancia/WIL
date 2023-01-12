// 11.1 질의 함수와 변경 함수 분리하기 Before

// 함수를 만들 때 고려할 사항
// side effect가 없어야 한다.
// side effect -> 예상치 못한 부수적인 효과가 있을 때 -> 부작용


// 예제 1 -> 함수가 두 가지 일(getTotalOutStanding, sendBill)을 하고 있다.
function totalOutstandingAndSendBill() {
  const result = customer.invoices.reduce(
    (total, each) => each.amount + total,
    0
  );
  sendBill();
  return result;
}

// 예제 2 -> 두 가지 일(악당 찾기, 알람 보내기)을 하고 있다.
export function alertForMiscreant(people, alarm) {
  for (const p of people) {
    if (p === 'Don') {
      setOffAlarms(alarm, p);
      return 'Don';
    }
    if (p === 'John') {
      setOffAlarms(alarm, p);
      return 'John';
    }
  }
  return '';
}

function setOffAlarms(alarm, p) {
  alarm.setOff('Found Miscreant ' + p);
}
