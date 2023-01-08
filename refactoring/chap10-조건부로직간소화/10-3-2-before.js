// 10.3 중첩 조건문을 보호 구문으로 바꾸기 Before

export function adjustedCapital(instrument) {
  let result = 0;
  if (instrument.capital > 0) {
    if (instrument.interestRate > 0 && instrument.duration > 0) {
      result =
        (instrument.income / instrument.duration) *
        anInstrument.adjustmentFactor;
    }
  }
  return result;
}
