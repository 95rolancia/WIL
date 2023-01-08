// 10.3 중첩 조건문을 보호 구문으로 바꾸기 After

export function adjustedCapital(instrument) {
  if (!isEligibleForAdjustedCapital(instrument)) {
    return 0;
  }

  return (
    (instrument.income / instrument.duration) * anInstrument.adjustmentFactor
  );
}

function isEligibleForAdjustedCapital({ capital, interestRate, duration }) {
  return capital > 0 && interestRate > 0 && duration > 0;
}
